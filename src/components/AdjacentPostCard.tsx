import { IPost } from "@/model/post";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: IPost;
  type: "next" | "prev";
};

export default function AdjacentPostCard({ post, type }: Props) {
  const ICON_CLASS =
    "m-4 text-5xl text-yellow-300 transition-all group-hover:text-6xl";
  return (
    <Link
      href={`/posts/${post.path}`}
      className="relative w-full bg-black max-h-56 group"
    >
      <Image
        className="w-full opacity-40"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={150}
        height={100}
      />
      <div className="absolute flex items-center justify-around w-full px-8 text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{post.title}</h3>
          <p className="font-bold">{post.description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
