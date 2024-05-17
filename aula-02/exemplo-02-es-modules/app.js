// O node possui 2 formas de manipular modulos

// Sempre utilize o EcmaScript

// CommonJS -
// Importar: utilizando o "require", exemplo: const express = require("express");
// Exportar: utilizando o "module.exports", exemplo: module.exports = "código a ser exportado"

// EcmaScript / Es module -
// Importar: import express from 'express',
// Exportar: export default "código a ser exportado"

// Importação do formato nomeado
// import { mutiplicar, potencia } from './functions/mutiplicar.js';
import * as moduleMultiplicate from "./functions/mutiplicar.js";

console.log(moduleMultiplicate.mutiplicar(5, 5));
console.log(moduleMultiplicate.potencia(3, 2));

// Importação do formato padrão
// import moduleSum from "./functions/somar.js";
// console.log(moduleSum(735, 5));

import express from "express";
const app = express();

// host: localhost | 127.0.0.1
// host + porta: localhost:3000

app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.get("/data", (request, response) => {
  const result = {
    name: "Edmilton",
    age: 29,
  };

  response.status(200).json(result);
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Servidor rodando");
});

// para executar, abra o terminal e digite: node app.js
