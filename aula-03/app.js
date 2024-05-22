import express from "express";

// Inicia o express
const app = express();

// Middleware - executa antes de todas as rotas
app.use(express.json());

let listUsers = []; // Armazenamento na memória

// GET utilizado para buscar dados no backend
// R - crud
app.get("/users", (request, response) => {
  response.status(200).json(listUsers);
});

// POST utilizado para salvar dados no backend
// C - crud
app.post("/users", (request, response) => {
  const user = request.body; // Obtem os dados que vieram no corpo da requisição
  listUsers.push(user);

  response.status(201).json(user);
});

// DELETE utilizado para deletar dados no backend
// D - crud
app.delete("/users/:id", (request, response) => {
  // request.params.id
  const { id } = request.params; // Destructuring

  const userToDelete = listUsers.find((user) => user.id === Number(id));

  if (!userToDelete) {
    response.status(404).json({ message: "User not found" });
    return;
  }

  listUsers = listUsers.filter((user) => user.id !== Number(id));

  response.status(204).end();
});

// PUT utilizado para atualizar dados no backend
// U - crud
app.put("/users/:id", (request, response) => {
  // request.params.id
  const { id } = request.params.id; // Destructuring

  const userToUpdate = listUsers.find((user) => user.id === Number(id));

  if (!userToUpdate) {
    response.status(404).json({ message: "User not found" });
    return;
  }

  const newData = request.body; // Obtem os dados que vieram no corpo da requisição

  if (newData.name) {
    userToUpdate.name = newData.name;
  }

  if (newData.age) {
    userToUpdate.age = newData.age;
  }

  if (newData.married !== undefined && newData.married !== null) {
    user.married = newData.married;
  }

  listUsers = listUsers.map((user) => {
    if (user.id === Number(id)) {
      return userToUpdate;
    }

    return user;
  });

  response.status(200).json(userToUpdate);
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
