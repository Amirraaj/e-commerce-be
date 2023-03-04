import mongoose from "mongoose";
import product from "./product.js";
import user from "./user.js";
const ReceiverDetails = new mongoose.Schema({
    
    location:{
        type:String,
        require:true,
    },
    momentium:{
        type:String,
        require:true,
    },
    receiver:{
        type:String,
        require:true,
    },
    recNumber:{
        type:Number,
        required: true,
    }
})
const ProductsDetailSchema = new mongoose.Schema({
      product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:product,
        required:true,
        size:String,
        quantity:Number,
      }
})



const OrderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:user,
        require:true,
    },
    receiver_info:ReceiverDetails,
    product_info:ProductsDetailSchema,
}, {timestamps:true})

const order = mongoose.model("Order", OrderSchema);
export default order;







