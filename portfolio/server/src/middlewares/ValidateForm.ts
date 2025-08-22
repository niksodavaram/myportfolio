import type { Request, Response, NextFunction } from "express";

export const validateForm = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, mobile, description } = req.body;

  if (!name || !email || !mobile || !description) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  next();
};