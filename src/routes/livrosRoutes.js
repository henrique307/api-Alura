import express from "express";
import livrosController from "../controller/livrosController.js";

const livros = express.Router();

livros
  .get("/livros", livrosController.GET_Livros)
  .get("/livros/busca", livrosController. GET_LivroPorEditora)
  .get("/livros/:id", livrosController.GET_LivroPorId)
  .post("/livros", livrosController.POST_Livro)
  .put("/livros/:id", livrosController.PUT_Livro)
  .delete("/livros/:id", livrosController.DELETE_Livro);

export default livros;