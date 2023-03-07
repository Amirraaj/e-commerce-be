import mongoose from "mongoose";
import user from "./user.js";
import product from "./product.js";
const receiverSchema = new mongoose.Schema({
  receiver_name: {
    type: String,
    require: true,
  },
  receiver_contact: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  mummontem: {
    type: String,
    require: true,
  },
});

const productSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: product,
    require: true,
  },
  size:{
    type: String,
    require:true,
  },
  quantity:{
    type:Number,
    require:true,
  }
});

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    require: true,
  },
  receiver: receiverSchema,
  products:[productSchema],
}, {timestamps:true});

const order = mongoose.model("Order",orderSchema);

export default order;


