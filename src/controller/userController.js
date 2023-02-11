import User from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const addUser = async(request, response) =>{
    try {
        const user = request.body;
        const newUser = await new User(user);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt)
        newUser.save();
        response.json({status:201, message:"User Created Sucessfully", data:newUser});
    } catch (error) {
        response.json({status:500, message:"Internal Server error"})
    }

}

export const logIn = async(request, response) =>{
    try {
       const user = await User.findOne({email: request.body.email});

        if(!user){
             response.json({status:401, message:"Invalid Email or Password ."})
        }
        const validPassword = await bcrypt.compare(request.body.password,user.password )
        if(!validPassword){
            response.json({status:401, message:"Authentication failed. Invalid Password ."})
        }
         response.json({status:201, message:"Login Sucessfull", token : jwt.sign({_id: user?._id }, process.env.SECRET)});

    } catch (error) {
        response.json({status:500, message:"Internal Server error"})
    }
}
    
export const getUserByID = async(request, response) =>{
    try {
        const user = await User.findById(request.user._id);
        if(!user){
            return res.status(404).json({ message: "No Profile Found" });
        }
        response.json({status:200, message:"User fetch Sucessfully", data:user})
        
    } catch (error) {
        response.json({status:500, message:"Internal Server error"})
    }
}