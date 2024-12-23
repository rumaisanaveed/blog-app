import { AllPosts } from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
import React from "react";

export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const getPosts = getAllPosts();
  return {
    props: {
      posts: getPosts,
    },
  };
}
