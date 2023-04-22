import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/core/posts";
import Image from "next/image";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <article className="m-4 overflow-hidden bg-gray-100 shadow-lg rounded-2xl">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="ml-2 font-semibold">{post.date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-xl font-bold">{post.description}</p>
        <div className="mt-4 mb-8 border-2 w-44 border-sky-600" />
        <MarkdownViewer content={post.content} />
      </section>
    </article>
  );
}
