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

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getBooksById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const foundBook = await Book.findOne({ id: +id });

    if (foundBook) {
      res.status(200).json(foundBook);
    } else {
      res.status(400).json({ status: "Invalid id" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
