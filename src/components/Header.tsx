"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const LINK_CLASS = "transition-all hover:text-xl";
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  console.log(inputValue);

  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">Hyeonwoo-Blog</h1>
      </Link>
      <nav className="flex gap-4">
        <div className="flex items-center">
          <AiOutlineSearch size={22} className="mr-2" />
          <input
            placeholder="검색하기"
            value={inputValue}
            onChange={handleInputValue}
          />
        </div>

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
