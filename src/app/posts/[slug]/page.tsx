import { getPostData } from "@/core/posts";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={post.content} />
      <pre>{post.content}</pre>
    </>
  );
}
