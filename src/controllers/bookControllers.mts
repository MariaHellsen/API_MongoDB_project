import { Request, Response } from "express";
import Book from "../models/bookSchema.mjs";

export const createBook = async (req: Request, res: Response) => {
  try {
    const { name, author, price } = req.body;
    if (!name || !author || !price) {
      res.status(400).send("Please, enter required information");
    } else {
      const newBook = await Book.create({
        id: Date.now(),
        name,
        author,
        price,
      });
      res.status(201).json(newBook);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
