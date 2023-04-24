import { EmailData } from "@/types/email";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_USER, // generated ethereal user
    pass: process.env.AUTH_PASS, // generated ethereal password
  },
});

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    from,
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람: ${from}</p>
    `,
  };

  return await transporter.sendMail(mailData);
}
