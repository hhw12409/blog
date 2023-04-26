import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/core/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "개발 관련 글",
};

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
