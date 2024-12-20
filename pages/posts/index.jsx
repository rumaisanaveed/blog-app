import { AllPosts } from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import React from "react";

export default function AllPostsPage({ posts }) {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React Framework for production - it makes building fullstack React applications",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with Next.js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React Framework for production - it makes building fullstack React applications",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with Next.js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React Framework for production - it makes building fullstack React applications",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with Next.js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React Framework for production - it makes building fullstack React applications",
      date: "2022-02-10",
    },
  ];
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const getPosts = getAllPosts();
  return {
    props: {
      posts: getPosts,
    },
  };
}
