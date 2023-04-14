import path from "path";
import { promises as fs } from "fs";
import { IPost } from "@/types/post";

export async function getAllPosts(): Promise<IPost[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return await fs
    .readFile(filePath, "utf-8")
    .then<IPost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<IPost[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}
