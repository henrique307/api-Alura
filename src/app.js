import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "ta de noite" },
  { id: 2, titulo: "Aku no Hana" },
];

app.get("/", (req, res) => {
  res.status(200).send("curso de node");
});

app.get("/livros", (req, res) => {
  res.status(200).send(livros);
});

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params);
  res.json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.send("ta tudo mec xefia B)");
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params);
  livros[index].titulo = req.body.titulo;
  res.json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(req.params);
  let titulo = livros[index].titulo
  livros.splice(index, 1);
  res.send(`o titulo "${titulo}" foi removido com sucesso`);
});

// DA PRA FAZER ISSO ..
function buscaLivro({ id }) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
