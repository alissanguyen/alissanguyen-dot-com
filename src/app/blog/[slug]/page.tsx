import { getPostsAndTags } from "@/app/api/getPostsAndTags";
import BlogPostContainer from "@/components/Blog/BlogPostContainer";
import { getContentfulBlogPostBySlug } from "@/contentful/contentfulClient";
import "@/styles/blogpost.css"
import { Metadata } from "next";

const TWITTER_PUBLISHER = "https://twitter.com/ai_alissa";
const TWITTER_CARD_TYPE = "summary_large_image";
const TWITTER_ACC = "@ai_alissa";
const AUTHOR = "Alissa Nguyen";
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;
const BLOG_KEYWORDS =
    "Learn Remix, React, JavaScript, Typescript, Personal Blog, Technical Blog, Alissa Nguyen, Alissa Nguyen Blog, Software Development, Developer, Software Engineer, Modern Programing, Frontend Programmer, Web Developer, Seattle, Programming tutorials, Web development tips, Software engineering insights, Coding best practices, Industry trends, Personal growth, Career advice, Tech community, Beginner-friendly, Code snippets, Troubleshooting, Web design inspiration, Developer resources, Tech news and updates";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  if (!params.slug) {
    throw new Error("Missing slug in params.");
  }

  const blogPost = await getContentfulBlogPostBySlug(params.slug);

  const title = blogPost.fields.blogPostTitle;
  const description = blogPost.fields.blogPostExcerpt.slice(0, 160) + "... ";
  const keywords =
    blogPost.fields.blogPostKeywords +
    ", Alissa Nguyen, AlissaNguyen, FrontEnd Engineer, " + BLOG_KEYWORDS;

  const imageURl = "https:" + blogPost.fields.blogPostSplash.fields.file.url;

  const webURL = "https://www.alissanguyen.com/blog/" + params.slug;
  const publishedDate = blogPost.sys.createdAt;
  const updatedDate = blogPost.sys.updatedAt;

  return {
    title,
    description,
    keywords,
    authors: [{ name: AUTHOR }],
    openGraph: {
      title,
      description,
      url: webURL,
      siteName: "Alissa Nguyen's Blog",
      images: [
        {
          url: imageURl,
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          alt: title,
        },
      ],
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: updatedDate,
    },
    twitter: {
      card: TWITTER_CARD_TYPE,
      site: TWITTER_ACC,
      creator: TWITTER_ACC,
      title,
      description,
      images: [imageURl],
    },
    themeColor: "#212529",
    publisher: TWITTER_PUBLISHER,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    throw new Error("Missing slug in params.");
  }

  try {
    const [blogPost, { blogPosts, contentfulTags }] = await Promise.all([
      getContentfulBlogPostBySlug(params.slug),
      getPostsAndTags(),
    ]);

    return (
      <BlogPostContainer
        blogPost={blogPost}
        blogPosts={blogPosts}
        contentfulTags={contentfulTags}
      />
    );
  } catch (e) {
    console.error(e);
    throw new Response(undefined, { status: 404 });
  }
}