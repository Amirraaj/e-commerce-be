import express from "express";
import { addUser, logIn } from "../controller/userController.js";

const router = express.Router();

router.post('/addUser', addUser)
router.post('/login',logIn)

 export default router