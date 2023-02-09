import express from "express";
import { addProduct, getAllProduct, getProductById } from "../controller/productController.js";
const router = express.Router();

router.post('/addProduct', addProduct );
router.get('/getAllProduct', getAllProduct);
router.get('/:id',getProductById)

export default router;