import express from "express";
import { createBook } from "../controllers/bookControllers.mjs";

export const bookRouter = express.Router();

// POST - https://localhost:3000/books/
bookRouter.post("/", createBook);

// const router = express.Router()

// router.get('/', getTodos)
// router.get('/:id', getTodosById)
// router.post('/', createTodo)
// router.put('/:id', updateTodo)
// router.delete('/:id', deleteTodo)

// export default router
