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

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  response.setHeader("Access-Control-Max-Age", 10);

  response.setHeader("Content-type", "application/json");

  const data = {
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/42161813?v=4",
    login: "Jacaré Pansanato",
  };

  response.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log("Servidor rodando");
});

// Abra o terminal e execute o comando: node app_json.js
// Abra o navegador e acesse: http://localhost:3000
