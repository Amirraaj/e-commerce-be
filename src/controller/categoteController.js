
import Category from "../model/category.js";

export const addCategory = async(request, response) => {
    try {
     const category = request.body;
      const newCategory = await new Category(category).save();
       response.json({status:201, message:"Category Created Sucessfully", data:newCategory});
        } catch (error) {
        response.json({status:500, message:"Internal Server error"})
        }
}

export const getAllCategory =  async(request, response) =>{
    try{
        const category = await Category.find();
        response.json({ status: 201, message:"Category fetch sucessfully", data: category});
    }catch(error){
        response.json({status:500, message:"Internal Server error"})
    }
}

export const deleteCategory = async(request, response) =>{
    try {
        await Category.deleteOne({id:request.params.id});
        response.json({ status: 201, message:"Categoty deleted sucessfully"});
    } catch (error) {
        response.json({status:500, message:"Internal Server error"})
    }
}

export const getCategoryById = async( request, response) =>{
    try{
    const category = await Category.findById(request.params.id);
        response.json({ status: 201, message:"Category fetch sucessfully", data: category});
    }catch(error){
        response.json({status:500, message:"Internal Server error"}) 
    }
}

export const editCategory = async(request, response) => {
    try {
        const category = request.body;
        const editCategory = new Category(category);

        await Category.updateOne({id:request.params.id},editCategory );
        response.json({ status: 201, message:"Category Updated sucessfully", data: editCategory});
        
    } catch (error) {
        response.json({status:500, message:"Internal Server error"}) 
    }
}