import MarkdownViewer from "@/components/MarkdownViewer";
import { IPostData } from "@/model/post";
import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  post: IPostData;
};

export default function PostContent({ post }: Props) {
  const { date, title, description, content } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="ml-2 font-semibold">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mt-4 mb-8 border-2 w-44 border-sky-600" />
      <MarkdownViewer content={content} />
    </section>
  );
}
