"use client";

import { getAllPosts } from "@/core/posts";

export default async function SearchedPosts() {
  const posts = await getAllPosts();
  return <div>SearchedPosts</div>;
}
