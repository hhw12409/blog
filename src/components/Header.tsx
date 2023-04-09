import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-5">
      <Link href="/">
        <h1 className="text-2xl font-bold">Hyeonwoo-Blog</h1>
      </Link>
      <nav className="flex gap-5">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
