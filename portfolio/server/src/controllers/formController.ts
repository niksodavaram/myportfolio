import type { Request, Response } from "express";

export const submitForm = (req: Request, res: Response) => {
  const { name, email, mobile, description, deadline } = req.body;

  console.log("Form Data Received:", { name, email, mobile, description, deadline });

  // Add your logic here (e.g., save data to DB, send an email, etc.)
  res.status(200).json({ message: "Form submitted successfully!" });
};