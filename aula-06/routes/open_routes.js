import express from "express";
const openRouter = express.Router();
import bcrypt from "bcrypt";
import User from "../database/User.js";
import jwt from "jsonwebtoken";

// [POST] - http://localhost:3000/auth/register
openRouter.post("/register", async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return response.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      name,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    response.status(200).json(savedUser);
  } catch (error) {
    response.status(500).json({ error: error.message || "Error on create a new user" });
  }
});

// [POST] - http://localhost:3000/auth/login
openRouter.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });
  if (!user) {
    return response.status(404).json({ message: "User not found" });
  }

  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return response.status(400).json({ message: "Password invalid" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  response.status(200).json({ token });
});

export { openRouter };
