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

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, author, price } = req.body;

  try {
    // Letar efter en book via ID
    const book = await Book.findOne({ id: +id });

    if (!book) {
      // If there is no book on this ID
      return res.status(400).json({ status: "Invalid id" });
    }

    // If all the parameters are without any appdate then ask to apdate
    if (!name && !author && !price) {
      return res
        .status(400)
        .json({ error: "Please, uppdate any of the fiels" });
    }

    if (name) {
      book.name = name;
    }

    if (author) {
      book.author = author;
    }

    if (price) {
      book.price = price;
    }

    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(error);
  }
};
