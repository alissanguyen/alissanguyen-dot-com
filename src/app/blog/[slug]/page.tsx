import { getPostsAndTags } from "@/api/getPostsAndTags";
import BlogPostContainer from "@/components/Blog/BlogPostContainer";
import { getContentfulBlogPostBySlug } from "@/contentful/contentfulClient";
import "@/styles/blogpost.css"

interface Props {

}

// TODO: Add MetaData
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