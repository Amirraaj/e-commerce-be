import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    title:{
        type: String,
        require:true,
    },
    discription:{
        type: String,
        require:true,
    },
    photo: {
        type: String,
        require: true
    },
},{timestamps:true})

const category = mongoose.model("category", categorySchema);

export default category;