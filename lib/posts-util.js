import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postsIdentifier) => {
  const postSlug = postsIdentifier.replace(/\.md$/, ""); //removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // to extract out the metadata and the actual content
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = () => {
  // read all the files inside the directory
  const postsFiles = fs.readdirSync(postsDirectory);
  const allPosts = postsFiles.map((postFile) => {
    return getPostData(postFile);
  });
  // get the latest posts
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) => post.isFeatured);
  return filteredPosts;
};
