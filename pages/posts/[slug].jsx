import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import React from "react";

export default function PostDetails({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  // get all filenames
  const postFilenames = getPostsFiles();
  // remove the extension
  const slugs = postFilenames.map((post) => post.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
