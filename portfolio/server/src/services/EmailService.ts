import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, body: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  await transporter.sendMail({
    from: "your-email@gmail.com",
    to,
    subject,
    html: body,
  });
};