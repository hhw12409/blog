"use client";
import { IForm } from "@/types/form";
import { useState } from "react";
import Banner, { BannerData } from "./Banner";
import SnackBar from "./@shared/SnackBar";

export default function ContactForm() {
  const [form, setForm] = useState<IForm>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [snackText, setSnackText] = useState("");
  const handleInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSnackText("성공했습니다!");
    setBanner({
      message: "success!!",
      state: "success",
    });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 p-4 my-4 text-white bg-slate-700 rounded-xl"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={handleInputValueChange}
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleInputValueChange}
          className="text-black"
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleInputValueChange}
          className="text-black"
        />
        <button className="font-bold text-black bg-yellow-300 hover:bg-yellow-400">
          Submit
        </button>
      </form>
      <SnackBar text={snackText} setText={setSnackText} />
    </section>
  );
}
