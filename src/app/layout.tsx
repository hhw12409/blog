import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./layout.module.css";
import RecoilContainer from "@/components/RecoilContainer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "라떼의 개발 블로그",
    template: "라떼의 개발 블로그 | %s",
  },
  description: "프론트엔드 개발자 라떼의 개발 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={sans.className}>
      <body
        className={`flex flex-col w-full mx-auto max-w-screen-2xl ${styles.body}`}
      >
        <RecoilContainer>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </RecoilContainer>
      </body>
    </html>
  );
}
