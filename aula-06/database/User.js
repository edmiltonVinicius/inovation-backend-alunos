import mongoose from "mongoose";

// MONGODB: schema/collection
// RELACIONAL: tabela

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
