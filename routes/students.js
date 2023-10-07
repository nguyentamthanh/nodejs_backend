import express from "express";
import { studentsControler } from "../controllers/index.js";
const router = express.Router();
router.get("/", studentsControler.getAllStudents);
router.get("/:id", studentsControler.getStudentById);
// put or patch
router.patch("/:id", studentsControler.updateStudent);
router.post("/insert", studentsControler.insertStudent);

export default router;
