import pkg from "mongoose";
const { connect, connection, disconnect } = pkg;

// Query string - url de conexão com o banco de dados
const uri =
  "mongodb+srv://edmilton:<password>@cluster-inicial.e0mf8hq.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster-inicial";

// Objeto de configuração da conexão com o MongoDB
const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

// Função que executa de conexão com o banco de dados
async function run() {
  try {
    await connect(uri, clientOptions);
    await connection.db.admin().command({ ping: 1 });
    console.log("Database connected");
  } catch (error) {
    console.log("Error: ", error);
  }
}
run().catch((error) => console.log(error));
