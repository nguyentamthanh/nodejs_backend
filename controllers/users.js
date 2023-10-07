import { param, validationResult } from "express-validator";
import { studentRepository, userRepository } from "../repositories/index.js";
import { EventEmitter } from "node:events";
const myEvent = new EventEmitter();
myEvent.on("event.register.user", (param) => {});
console.log("🚀 ~ file: users.js:5 ~ myEvent:", myEvent);
async function login(req, res) {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const { email, password } = req.body;
    // call repository
    await userRepository.login(email, password);
    res.status(200).json({
      message: "login suggestfully",
    });
  }
}
async function register(req, res) {
  const { name, email, password, phoneNumber, address } = req.body;
  await userRepository.register({
    name,
    email,
    password,
    phoneNumber,
    address,
  });
  //   Event emitter
  res.status(201).json({
    message: "Register user successfully",
  });
}
async function getDetailUser(req, res) {}
async function getAllUser(req, res) {}

export default { login, register, getDetailUser, getAllUser };
