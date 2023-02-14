import express from "express";
import { addProduct, deleteProduct, getAllProduct, getProductById } from "../controller/productController.js";
import uploadRouter from "../controller/uploadController.js";
const router = express.Router();

router.post('/addProduct', addProduct );
router.get('/getAllProduct', getAllProduct);
router.get('/:id',getProductById)
router.delete('/:id',deleteProduct)
router.use('/upload', uploadRouter)

export default router;