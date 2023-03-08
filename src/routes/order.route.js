import express from "express";
import { addOrder,getAllOrder, getOneOderById } from "../controller/orderController.js";

const router = express.Router();

router.post('/addOrder', addOrder)
router.get('/getAllOrder', getAllOrder)
router.get('/:id',getOneOderById)


export default router;




