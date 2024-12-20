import React from "react";
import classes from "./featured-posts.module.css";
import { PostsGrid } from "../posts/posts-grid";

export const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
