import express from "express";
import { body, validationResult } from "express-validator";
import { usersControler } from "../controllers/index.js";
const router = express.Router();
router.get("/", usersControler.getAllUser);
router.get("/:id", usersControler.getDetailUser);
// email , password
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  usersControler.login
);
router.post("/register", usersControler.register);

export default router;
