import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId , ref:"autores" ,required: true },
  editora: { type: String, required: true },
  numPaginas: { type: Number },
});

const livroModel = mongoose.model("livros", livroSchema);

export default livroModel;
