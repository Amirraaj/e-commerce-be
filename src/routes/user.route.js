import express from "express";
import { addUser, logIn, getUserByID } from "../controller/userController.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.post('/addUser', addUser)
router.post('/login',logIn)
router.get('/getUserByID',verifyToken, getUserByID)
 export default router