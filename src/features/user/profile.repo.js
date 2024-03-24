import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";

const UserModel = mongoose.model("User", userSchema);

export default class ProfileRepository{

    async getUser(id){
        try{
            const user = await UserModel.findById(id).select('-password -id -__v');
            return user;
        }catch(err){
            throw err;
        }
    }

    async getAll(){
        try{
            const user = await UserModel.find().select('-password -id -__v');
            return user;
        }catch(err){
            throw err;
        }
    }

    async updateProfile(id, user){
        try{
            const fetchedUser = await UserModel.findById(id).select('-password -id -__v');
            if(user.name) fetchedUser.name = user.name;
            if(user.gender)  fetchedUser.gender = user.gender;
            const resp = await fetchedUser.save();
            return resp;

        }catch(err){
            throw err;
        }
    }

    async uploadAvatar(id, imageUrl){
        try{
            const user = await UserModel.findById(id).select('-password -id -__v');
            user.imageUrl = imageUrl;
            const resp = user.save();
            return resp;

        }catch(err){
            throw err;
        }
    }


}