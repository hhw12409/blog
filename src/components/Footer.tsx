export default function Footer() {
  const nowYear = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 text-white bg-black">
      <p>
        Thank You for Visiting My Blog, Have a Good Day 😆
        <br />© {nowYear} Frontend Developer Hyeonwoo, Powered By Next.js
      </p>
    </footer>
  );
}
