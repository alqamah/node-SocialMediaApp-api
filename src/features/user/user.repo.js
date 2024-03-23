import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";

const UserModel = mongoose.model("User", userSchema);

export default class UserRepository{
    async signUp(user){
        try{
            const newUser = new UserModel(user);
            await newUser.save();
            return newUser;
        }catch(err){
            throw err;
        }
    }

    async findByEmail(email){
        try{
            const user = await UserModel.findOne({email});
            return user;
        }catch(err){
            throw err;
        }
    }

    async resetPassword(email, password){
        try{
            let user = await UserModel.find(email);
            user.password = password;
            await user.save();
        }catch(err){
            throw err;
        }
    }
}

