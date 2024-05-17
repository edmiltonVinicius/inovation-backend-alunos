const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
// hostname + port = http://localhost:3000

/**
 * Comunicação web
 *
 * request = o cliente faz uma requisição
 * response = o servidor envia uma resposta
 */

/**
 * O Javascript tem o JSON.parse() e o JSON.stringify() para transformar objetos em strings e strings em objetos.
 *
 * JSON.parse() = transforma string em objeto
 *
 * JSON.stringify() = transforma objeto em string
 */

const server = http.createServer(function (request, response) {
  response.statusCode = 200;

  response.setHeader("Content-Type", "text/plain");

  response.end("<h1>Hello world</h1>\n");
});

server.listen(port, hostname, () => {
  console.log("Servidor rodando");
});

// Abra o terminal e execute o comando: node app_plain-text.js
// Abra o navegador e acesse: http://localhost:3000
