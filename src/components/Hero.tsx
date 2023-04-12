import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        src={profileImage}
        alt="profile"
        width={250}
        height={250}
        className="mx-auto rounded-full"
        priority
      />
      <h2 className="mt-2 text-3xl font-bold">Nice to Meet You</h2>
      <h3 className="text-xl font-semibold">
        {"I'm Junior Frontend Developer Hyeonwoo."}
      </h3>
      <Link href="/contact">
        <button className="px-4 py-1 mt-2 font-bold bg-yellow-500 rounded-xl">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
