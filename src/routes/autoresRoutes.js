import express from "express";
import autoresController from "../controller/autoresController.js";

const autores = express.Router();

autores
  .get("/autores", autoresController.GET_Autores)
  .get("/autores/:id", autoresController.GET_Autor)
  .post("/autores", autoresController.POST_Autor)
  .put("/autores/:id", autoresController.PUT_Autor)
  .delete("/autores/:id", autoresController.DELETE_Autor);

export default autores;
