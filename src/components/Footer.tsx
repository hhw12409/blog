export default function Footer() {
  const nowYear = new Date().getFullYear();
  return (
    <footer className="py-2 text-sm text-center text-white bg-slate-900">
      <p>
        Thank You for Visiting My Blog, Have a Good Day 😆
        <br />© {nowYear} Frontend Developer Hyeonwoo, Powered By Next.js
      </p>
    </footer>
  );
}
