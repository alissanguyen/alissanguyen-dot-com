import "@/styles/blog.css";

import { getPostsAndTags } from "@/app/api/getPostsAndTags";
import BlogPostsContainer from "@/components/Blog/BlogPostsContainer";
import { Metadata, Viewport } from "next";

const BLOG_DESCRIPTION =
    "Hi, I'm Alissa. My blog features a wide range of topics, including programming tutorials, web development tips, industry trends, and personal growth. Whether you're a beginner looking to learn coding best practices or an experienced developer seeking inspiration, my blog provides engaging and informative content.";

const IMAGE_WIDTH = "1200";
const IMAGE_HEIGHT = "630";
const BLOG_WEBSITE_NAME = "Alissa Nguyen's Blog";
const TWITTER_CARD_TYPE = "summary_large_image";
const AUTHOR = "Alissa Nguyen";

const TWITTER_ACC = "@ai_alissa";
const BLOG_KEYWORDS =
    "Learn Remix, React, JavaScript, Typescript, Personal Blog, Technical Blog, Alissa Nguyen, Alissa Nguyen Blog, Software Development, Developer, Software Engineer, Modern Programing, Frontend Programmer, Web Developer, Seattle, Programming tutorials, Web development tips, Software engineering insights, Coding best practices, Industry trends, Personal growth, Career advice, Tech community, Beginner-friendly, Code snippets, Troubleshooting, Web design inspiration, Developer resources, Tech news and updates";

const BLOG_URL = "https://www.alissanguyen.com/blog";

const BLOG_IMAGE_URL =
    "https://www.alissanguyen.com/assets/images/blogpreview.png";

const WEBSITE_URL = "https://www.alissanguyen.com/";

export const metadata: Metadata = {
    title: BLOG_WEBSITE_NAME,
    description: BLOG_DESCRIPTION,
    keywords: BLOG_KEYWORDS,
    openGraph: {
        title: BLOG_WEBSITE_NAME,
        description: BLOG_DESCRIPTION,
        url: BLOG_URL,
        images: [
            {
                url: BLOG_IMAGE_URL,
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                alt: BLOG_WEBSITE_NAME,
            },
        ],
        locale: "en_US",
        type: "website"
    },

    twitter: {
        card: TWITTER_CARD_TYPE,
        site: TWITTER_ACC,
        creator: TWITTER_ACC,
        title: BLOG_WEBSITE_NAME,
        description: BLOG_DESCRIPTION,
        images: [
            {
                url: BLOG_IMAGE_URL,
                alt: BLOG_WEBSITE_NAME,
            },
        ],
    },
    authors: [{ url: AUTHOR }],
    metadataBase: new URL(WEBSITE_URL)
};

export const viewport: Viewport = {
    themeColor: '#212529',
}

export default async function Blog() {
    const { blogPosts, contentfulTags } = await getPostsAndTags();

    return (
        <>
            <BlogPostsContainer blogPosts={blogPosts} contentfulTags={contentfulTags} />
        </>
    )
}

