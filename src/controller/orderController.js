import Order from "../model/order.js";

export const addOrder = async (request, response) => {
  try {
    const order = request.body;
    const newOrder = await new Order(order).save();
    response.json({
      status: 201,
      message: "Order Created Sucessfully",
      data: newOrder,
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};


export const getAllOrder = async (request, response) =>{
    try{
        console.log("thisss")
        const order = await Order.find({}).populate("products").populate("user_id");
        console.log("thisss is it")
        response.json({status: 200, message:"Order fetched Sucessfully", data:order});
    } catch (error) {
        console.log(error,"ssssss")
        response.json({status:500, message:"Internal Server error"}) 
    }
}
