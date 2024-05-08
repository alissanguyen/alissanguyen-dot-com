'use client'
import { ContentfulBlogPost } from '@/contentful/types';
import { ContentfulCollection, EntryCollection, Tag } from 'contentful';
import * as React from 'react';
import BlogPostCard from './BlogPostCard';
import TagsSection from './TagsSection';
import SearchBarSection from './SearchBarSection';
import { fixedWidthLayoutClasses } from '@/constants';
import CryImage from "../../../public/assets/images/cry2.png"

import Image from 'next/image';

interface Props {
    blogPosts: EntryCollection<ContentfulBlogPost>;
    contentfulTags: ContentfulCollection<Tag>
}

const BlogPostsContainer: React.FC<Props> = ({ blogPosts, contentfulTags }) => {
    const [searchInput, setSearchInput] = React.useState("");
    const [subscribeEmail, setSubscribeEmail] = React.useState("")

    const postCount = Object.keys(blogPosts.items).length;

    const [selectedTagIds, setSelectedTagIds] = React.useState<Set<string>>(
        new Set([])
    );

    const updateSelectedTagIds = (tagId: string) => {
        setSelectedTagIds((prev) => {
            const clone = new Set(prev);

            /**
             * If this tag id already exists in the set of selectedTagIds, then remove it
             * If not, add it to the set
             */
            const tagIdAlreadyIncluded = clone.has(tagId);
            if (tagIdAlreadyIncluded) {
                clone.delete(tagId);
                return clone;
            } else {
                clone.add(tagId);
                return clone;
            }
        });
    };

    const selectedTagIdsAsArray = [...selectedTagIds];

    // Return all queried blog posts id no tag selected, otherwise return only if for every selectedTag, each filteredBlogPost has to contain that tag
    const filteredBlogPostsByTags =
        selectedTagIds.size === 0
            ? blogPosts.items
            : blogPosts.items.filter((post: any) => {
                return selectedTagIdsAsArray.every((selectedTag) => {
                    return post.metadata.tags.some((tag: any) => tag.sys.id === selectedTag);
                });
            });

    /** Create a set of available tag Ids by iterating over all the filtered blog posts and adding their tags to this set. */
    // @ts-ignore
    const availableTagIds: Set<string> = filteredBlogPostsByTags.reduce<
        Set<string>
    >((acc: any, cur: any) => {
        const tags = cur.metadata.tags; // Array of objects
        tags.forEach((tag: any) => {
            const alreadyHasThisTagId = acc.has(tag.sys.id);
            if (alreadyHasThisTagId) {
                return;
            }
            acc.add(tag.sys.id);
        });
        return acc;
    }, new Set([]));

    const searchInputRegex = new RegExp(
        escapeSearchTermForRegularExpressionConstruction(searchInput),
        "i"
    );

    const filteredBlogPostsByName =
        searchInput === ""
            ? filteredBlogPostsByTags
            : filteredBlogPostsByTags.filter((post: any) => {
                return searchInputRegex.test(post.fields.blogPostTitle);
            });

    // TODO: Persists tags and search selection in the url

    return (
        <div className={`${fixedWidthLayoutClasses} mt-[35%] xs:mt-[25%] md:mt-[15%]`}>
            <SearchBarSection
                search={searchInput}
                setSearch={setSearchInput}
                email={subscribeEmail}
                setEmail={setSubscribeEmail}
                count={postCount}
            />
            <TagsSection
                tags={contentfulTags.items}
                selectedTags={selectedTagIds}
                onTagSelect={updateSelectedTagIds}
                availableTags={availableTagIds}
            />
            {filteredBlogPostsByName.length > 0 ? (
                <ul className="BlogPosts__Wrapper grid gap-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 list-none">
                    {filteredBlogPostsByName.map((blogPost: any) => {
                        return (
                            <li key={blogPost.sys.id}>
                                <BlogPostCard blogPost={blogPost} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div className="flex items-center m-auto flex-row justify-center">
                    <p className="text-3xl text-blog-lgText mr-10">
                        Oh no.. there is some problems loading blog posts :(
                    </p>
                    <Image
                        src={CryImage}
                        alt="Crying illustration"
                        title="Crying illustration"
                        className='w-44'
                    />
                </div>
            )}
            {/* $$TODO: Add load more button */}
        </div>
    )
}

export default BlogPostsContainer

const escapeSearchTermForRegularExpressionConstruction = (
    str: string
): string => {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};
