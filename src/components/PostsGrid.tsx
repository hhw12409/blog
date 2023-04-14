import type { IPost } from "@/types/post";

type Props = { posts: IPost[] };
export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}
