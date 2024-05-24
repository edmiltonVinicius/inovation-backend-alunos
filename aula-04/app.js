import express from "express";
import cors from "cors";
import "./database/connection.js";
import Product from "./database/Product.js";

const app = express();

// Middlewares
app.use(express.json()); // Utilizado para converter i body da requisição de texto para JSON
app.use(cors()); // Utiliza para liberar as regras de cors na aplicação

// Create
app.post("/products", async (request, response) => {
  const { name, price, description } = request.body;

  if (!name || !description || typeof price !== "number") {
    return response.status(400).json({ message: "Invalid request body" });
  }

  const newProduct = new Product({
    name,
    description,
    price,
  });

  await newProduct.save();

  response.status(201).json({ newProduct });
});

// Read
app.get("/products", async (request, response) => {});

app.get("/products/:id", async (request, response) => {});

// Update
app.put("/products/:id", async (request, response) => {});

// Delete
app.delete("/products/:id", async (request, response) => {});

app.listen(3000, () => console.log("Server listening on port 3000"));
