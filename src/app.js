import express from "express";
import db from "./config/dbConnect.js";
import livroModel from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão:"));

db.once("open", () => {
  console.log("conexão com o banco feita com sucesso!!!!");
});

const app = express();

routes(app);

// app.get("/livros/:id", (req, res) => {
//   let index = buscaLivro(req.params);
//   res.json(livroModel[index]);
// });

// app.post("/livros", (req, res) => {
//   livroModel.push(req.body);
//   res.send("ta tudo mec xefia B)");
// });

// app.put("/livros/:id", (req, res) => {
//   let index = buscaLivro(req.params);
//   livroModel[index].titulo = req.body.titulo;
//   res.json(livroModel[index]);
// });

//app.delete("/livros/:id", (req, res) => {
//  let { id } = req.params;
//  let index = buscaLivro(req.params);
//  let titulo = livroModel[index].titulo;
//  livroModel.splice(index, 1);
//  res.send(`o titulo "${titulo}" foi removido com sucesso`);
//});


export default app;
