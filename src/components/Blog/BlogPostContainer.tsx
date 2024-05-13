'use client'
import { options } from '@/contentful/defaultRichTextMarkdown';
import { ContentfulBlogPost, ContentfulBlogPostTranslation } from '@/contentful/types';
import { useTheme } from '@/providers/ThemeProvider';
import { SupportedTheme } from '@/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry, TagLink } from 'contentful';
import * as React from 'react';
import { tagIdsToDisplayNames } from './BlogPostTags';
import FloatingHeader from '../FloatingHeader/FloatingHeader';
import { fixedWidthLayoutClasses } from '@/constants';
import ArrowIcon from "../../../public/assets/svg/arrow.svg"
import ArrowDarkIcon from "../../../public/assets/svg/arrowDark.svg"
import Image from 'next/image';
import AuthorSection from '../BlogPost/AuthorSection/AuthorSection';
import RelatedPostsSection from '../BlogPost/RelatedPostsSection/RelatedPostsSection';
import { getContentfulBlogPosts, getContentfulTags } from '@/contentful/contentfulClient';

interface Props {
    blogPost: Entry<ContentfulBlogPost>;
    blogPosts: Awaited<ReturnType<typeof getContentfulBlogPosts>>;
    contentfulTags: Awaited<ReturnType<typeof getContentfulTags>>;
}

const BlogPostContainer: React.FC<Props> = ({ blogPost, blogPosts, contentfulTags }) => {
    const { theme } = useTheme();

    // $$TODO: another error in the typings for this library.
    const blogPostBody = documentToReactComponents(
        blogPost.fields.bodyRichText as any,
        options
    );

    // An array containings all the translations, the number of translations = the array length-1
    const blogPostTranslation: any =
        blogPost.fields.blogPostTranslations !== undefined
            ? blogPost.fields.blogPostTranslations.content
            : [];

    const updatedDate = new Date(blogPost.sys.updatedAt).toDateString();
    const subUpdatedDate = updatedDate.substring(updatedDate.indexOf(" ") + 1);
    const publishedDate = new Date(blogPost.sys.createdAt).toDateString();
    const subPublishedDate = publishedDate.substring(
        updatedDate.indexOf(" ") + 1
    );

    const tagsToFindRelatedPostsFor = blogPost.metadata.tags;

    // Only suggest three other blogPosts, TODO: Question -- Should we decide to
    // give three random suggestions or the first three in this array?
    const blogPostWithAtLeastOneSharedTag = blogPosts
        .filter((post: any) => {
            return (
                post.sys.id !== blogPost.sys.id &&
                tagsToFindRelatedPostsFor.some((selectedTag: any) => {
                    return post.metadata.tags.some(
                        (tag: any) => tag.sys.id === selectedTag.sys.id
                    );
                })
            );
        })
        .slice(0, 3);

    return (
        <>
            <FloatingHeader
                postSlug={blogPost.fields.blogPostSlug}
                postTitle={blogPost.fields.blogPostTitle}
            />

            <div className="text-post-bodyText">
                <div
                    className={`${fixedWidthLayoutClasses} max-w-screen-xl flex flex-col mb-5 xl:mb-10`}
                >
                    <a
                        href="/blog"
                        className="go-back-btn inline-flex mt-10 border-none items-center justify-start text-xl mb-10 hover:text-post-bodyTextLg duration-100 ease-in w-fit"
                    >
                        <Image
                            src={
                                theme === SupportedTheme.DARK
                                    ? ArrowIcon
                                    : ArrowDarkIcon
                            }
                            className="go-back-arrow w-6 rounded-full mr-2 hover:text-post-bodyTextLg"
                            alt="go back"
                            title="Back"
                        />
                        Back to blog
                    </a>
                    <h1 className="BlogPost__Title flex w-full text-4xl text-post-bodyTextLg xs:text-5xl md:text-6xl font-bold max-w-[900px] mx-auto mb-4 custom2:mb-8 md:mb-12">
                        {blogPost.fields.blogPostTitle}
                    </h1>
                    <div className="w-full flex flex-col custom2:flex-row custom2:justify-between custom2:items-center mt-2 mx-auto max-w-[900px]">
                        <p className="BlogPost__DatePublish text-sm xs:text-lg md:text-xl mb-2 custom2:mb-0">
                            Published on {subPublishedDate}
                        </p>
                        <p className="BlogPost__DatePublish text-sm xs:text-lg md:text-xl">
                            Last updated on {subUpdatedDate}
                        </p>
                    </div>
                </div>
                <Image
                    src={"https://" + blogPost.fields.blogPostSplash.fields.file.url}
                    className="BlogPost__SplashImage max-w-[1200px] mb-5 xl:mb-10 mx-auto rounded-lg w-[83%] custom3:w-[85%] xs:w-[90%] xl:w-full"
                    alt={blogPost.fields.blogPostSplash.fields.title}
                    title={blogPost.fields.blogPostSplash.fields.title}
                    width={1200}
                    height={600}
                />
                <div
                    className={`BlogPost text-post-bodyText ${fixedWidthLayoutClasses} mb-20 max-w-[900px]`}
                >
                    <div className="Translation__Section flex flex-col sm:flex-row sm:items-center self-baseline text-base sm:text-lg gap-5">
                        {blogPostTranslation.length > 1 ? (
                            <div className="flex flex-row items-center gap-3 sm:gap-5">
                                {blogPostTranslation.map((translation: any) => {
                                    if (translation.data.target !== undefined) {
                                        const translationData: ContentfulBlogPostTranslation =
                                            translation.data.target.fields;
                                        const language: string = translationData.language;
                                        const translationLink: string =
                                            translationData.linkToTranslation;
                                        return (
                                            <a
                                                target="_blank"
                                                key={language}
                                                href={translationLink}
                                                className={`translation-button px-4 pt-2 pb-3 sm:px-5 sm:pt-3 sm:pb-4 ${theme === SupportedTheme.LIGHT
                                                    ? "bg-gray-100 text-black"
                                                    : "bg-zinc-700 text-white"
                                                    } rounded-full w-fit`}
                                            >
                                                {language}
                                            </a>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        ) : (
                            <div className="BlogPost__TranslationSection flex flex-col custom3:flex-row justify-start text-teal-600/80">
                                <span className="italic mr-10">No translation available.</span>
                            </div>
                        )}
                        <a
                            className="AddTranslation__Button font-medium underlined w-fit text-lg sm:text-xl"
                            href="https://github.com/alissanguyen/alissanguyen-dot-dev/blob/main/CONTRIBUTING.md"
                            target="_blank"
                        >
                            Add translation
                        </a>
                    </div>
                    <div className="BlogPost__BodyWrapper mt-10 custom3:mt-16">
                        {blogPostBody}
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between my-16">
                        <div className="text-base mb-16 lg:mb-0">
                            <span className="text-lg font-medium">Tags:</span>{" "}
                            {blogPost.metadata.tags.map((tag: any) => (
                                <TagBadge tag={tag} theme={theme} key={tag.id} />
                            ))}
                        </div>
                    </div>
                    <AuthorSection />
                </div>
                <hr></hr>
                {blogPostWithAtLeastOneSharedTag.length > 0 && (
                    <RelatedPostsSection relatedPosts={blogPostWithAtLeastOneSharedTag} />
                )}
                <hr></hr>
            </div>
        </>
    )
}

export default BlogPostContainer

interface TagProps {
    key: string;
    tag: TagLink;
    theme: SupportedTheme;
}
const TagBadge: React.FC<TagProps> = (props) => {
    const tagName = tagIdsToDisplayNames[props.tag.sys.id];

    return (
        <>
            {props.theme === SupportedTheme.LIGHT ? (
                <div className="tag-badge bg-gray-600 before:bg-gray-600 hover:bg-gray-900 before:hover:bg-gray-900 text-gray-200 hover:text-white inline-flex items-center">
                    {tagName}
                </div>
            ) : (
                <div className="tag-badge tag-dark bg-gray-300 before:bg-gray-300 before:hover:bg-white hover:bg-white text-gray-700 hover:text-black inline-flex items-center">
                    {tagName}
                </div>
            )}
        </>
    );
};
