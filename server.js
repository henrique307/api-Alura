import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port} `);
});

// JEITO Q TAVA ANTES COM HTTP

// import http from "http"

// const port = 3000

// const rotas = {
//     '/':'rota barra filho mída ixquece',
//     '/vapo':'rota vapo ixquece',
//     '/mengo':'rota do mengão'
// }

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'Content-type': "text/plain"});
//     res.end(rotas[req.url])
// })

// server.listen(port, () => {
//     console.log(`servidor rodando em http://localhost:${port} `)
// })
