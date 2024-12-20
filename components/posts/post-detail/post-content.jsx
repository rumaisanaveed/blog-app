import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const MyImage = (props) => {
  return (
    <Image
      alt={props.alt}
      src={props.src}
      height={300}
      width={600}
      layout="responsive"
    />
  );
};

export default function PostContent({ post }) {
  const { title, slug, image, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  const customComponents = {
    img: (imageProps) => <MyImage {...imageProps} />,
  };
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
}
