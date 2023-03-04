
import Order from "../model/oder.js"


export const addOrder = async(request, response) =>{
    try {
        const order = request.body;
        const newOrder = await new Order(order).save();
        response.json({status:201, message:"Order Send Sucessfully", data:newOrder});
        
    } catch (error) {
        response.json({status:500, message:"Internal Server error"})
    }
}