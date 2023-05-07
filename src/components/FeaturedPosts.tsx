import { getFeaturedPosts } from "@/core/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="pb-4 mb-4 text-2xl font-bold border-b border-[#eee]">
        Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
