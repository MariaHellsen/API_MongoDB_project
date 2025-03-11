import mongoose from "mongoose";
const { model, Schema } = mongoose;

const bookSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
});

const Book = model("Book", bookSchema);
export default Book;
