import express from "express";
import { addOrder, getAllOrder } from "../controller/orderController.js";

const router = express.Router();

router.post('/addOrder', addOrder)
router.get('/getAllOrder', getAllOrder)


export default router;




