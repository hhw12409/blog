import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "커리어 소개",
};

export default function AboutPage() {
  const TITLE_CLASS = "my-2 text-2xl font-bold text-gray-800";
  return (
    <>
      <Hero />
      <section className="p-8 m-8 text-center bg-gray-100 shadow-lg">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 프론트엔드 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만들고 있습니다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          미스터멘션(스타트업) (-Now)
          <br />
          컴투스 (2021.04.15. ~ 2023.01.01.)
          <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Next.js, React Native, Node, HTML, CSS, Typescript
          <br />
          Git, Slack, Notion, VS Code
        </p>
      </section>
    </>
  );
}
