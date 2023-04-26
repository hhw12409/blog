import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiNotion } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "메일 보내기",
};

export default function ContactPage() {
  const LINKS = [
    {
      icon: <AiFillGithub />,
      url: "https://github.com/hhw12409",
    },
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/%ED%98%84%EC%9A%B0-%ED%99%A9-08445523a/",
    },
    {
      icon: <SiNotion />,
      url: "https://ablaze-sparrow-04b.notion.site/7032b304ddca4695abcaaa5cd76af907",
    },
  ];

  const TITLE_CLASS = "font-bold text-3xl";
  return (
    <section className="flex flex-col items-center">
      <h2 className={`${TITLE_CLASS} my-2`}>Contact Me</h2>
      <p>sksk2425@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className={`${TITLE_CLASS} my-8`}>Or Send me an Email</h2>
      <ContactForm />
    </section>
  );
}
