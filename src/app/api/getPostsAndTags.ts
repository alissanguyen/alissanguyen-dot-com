import {
  getContentfulBlogPosts,
  getContentfulTags
} from "@/contentful/contentfulClient";
import { ContentfulBlogPost } from "@/contentful/types";
import { ContentfulCollection, Entry, Tag } from "contentful";

export interface PostsAndTags {
  blogPosts: Awaited<ReturnType<typeof getContentfulBlogPosts>>;
  contentfulTags: Awaited<ReturnType<typeof getContentfulTags>>;
}

export const getPostsAndTags = async (): Promise<PostsAndTags> => {
  const [blogPosts, contentfulTags] = await Promise.all([
    getContentfulBlogPosts(),
    getContentfulTags()
  ]);

  return { blogPosts, contentfulTags };
};
