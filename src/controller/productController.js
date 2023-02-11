
import { request , response} from "express";
import Product from "../model/product.js"

export const addProduct = async(request, response) =>{
    try {
        const product = request.body;
        const newProduct = await new Product(product).save();
        response.json({status:201, message:"Category Created Sucessfully", data:newProduct});
        
    } catch (error) {
        response.json({status:500, message:"Internal Server error"})
    }
}

export const getAllProduct = async(request, response) =>{
    try {
        const product = await Product.find();
        response.json({status: 200, message:"Product fetched Sucessfully", data:product});
    } catch (error) {
        response.json({status:500, message:"Internal Server error"}) 
    }
}

export const getProductById = async(request,response) =>{
    try {
        const product = await Product.findById(request.params.id).populate("category_id");
        response.json({status: 200, message:"Product fetched Sucessfully", data:product});
    } catch (error) {
        response.json({status:500, message:"Internal Server error"}) 
    }
}