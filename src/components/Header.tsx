"use client";

import Link from "next/link";

export default function Header() {
  const LINK_CLASS = "transition-all hover:text-xl";

  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">Hyeonwoo-Blog</h1>
      </Link>
      <nav className="flex gap-4">
        {["home", "about", "posts", "contact"].map((link) => (
          <Link
            key={link}
            href={link === "home" ? "/" : link}
            className={LINK_CLASS}
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
