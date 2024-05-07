// import { ContentfulCollection, EntryCollection, Tag } from "contentful";
// import { ContentfulBlogPost } from "@/contentful/types";
// import {
//   getContentfulBlogPosts,
//   getContentfulTags
// } from "@/contentful/contentfulClient";

// export interface PostsAndTags {
//   blogPosts: EntryCollection<ContentfulBlogPost>;
//   contentfulTags: ContentfulCollection<Tag>;
// }

// export const GET = async (): Promise<PostsAndTags> => {
//   const [blogPosts, contentfulTags] = await Promise.all([
//     getContentfulBlogPosts(),
//     getContentfulTags()
//   ]);

//   return new Response({ blogPosts, contentfulTags });
// };
