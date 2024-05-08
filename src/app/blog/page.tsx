import "@/styles/blog.css"

import React from "react";
import { getPostsAndTags } from "@/api/getPostsAndTags";
import BlogPostsContainer from "@/components/Blog/BlogPostsContainer";

export default async function Blog() {
    const { blogPosts, contentfulTags } = await getPostsAndTags();
    return (
        <>
            <BlogPostsContainer blogPosts={blogPosts} contentfulTags={contentfulTags} />
        </>
    )
}

