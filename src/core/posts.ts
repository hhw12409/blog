import path from "path";
import { promises as fs, readFile } from "fs";
import type { IPost, IPostData } from "@/types/post";

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

export async function getNonFeaturedPosts(): Promise<IPost[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<IPostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metaData = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metaData)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);
  const content = await fs.readFile(filePath, "utf-8");
  return {
    ...metaData,
    content,
  };
}
