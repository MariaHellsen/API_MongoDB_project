import express from "express";
import {
  createBook,
  getBooks,
  getBooksById,
  updateBook,
} from "../controllers/bookControllers.mjs";

export const bookRouter = express.Router();

//https://localhost:3000/books/
bookRouter.post("/", createBook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBooksById);
bookRouter.put("/:id", updateBook);
// router.delete('/:id', deleteBook)
