import type { IPost } from "@/types/post";
import PostCard from "./PostCard";

type Props = { posts: IPost[] };
export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
