import { FeaturedPosts } from "@/components/home-page/featured-posts";
import { Hero } from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function Home({ posts }) {
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
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
