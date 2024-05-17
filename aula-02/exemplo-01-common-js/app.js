// O node possui 2 formas de manipular modulos

// Sempre utilize o EcmaScript

// CommonJS -
// Importar: utilizando o "require", exemplo: const express = require("express");
// Exportar: utilizando o "module.exports", exemplo: module.exports = "código a ser exportado"

// EcmaScript / Es module -
// Importar: import express from 'express',
// Exportar: export default "código a ser exportado"

// Importação do formato nomeado
const moduleMultiplicate = require("./functions/mutiplicar.js");
console.log(moduleMultiplicate.mutiplicar(10, 2));
console.log(moduleMultiplicate.potencia(3, 2));

// Importação do formato padrão
const moduleSum = require("./functions/somar.js");
console.log(moduleSum(735, 5));

const express = require("express");
const app = express();

// host: localhost | 127.0.0.1
// host + porta: localhost:3000

app.listen(3000, "127.0.0.1", () => {
  console.log("Servidor rodando");
});

// para executar, abra o terminal e digite: node app.js
