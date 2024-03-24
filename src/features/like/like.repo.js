import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
import { postSchema } from "../post/post.schema.js";

const LikeModel = mongoose.model("Like", likeSchema);
const PostModel = mongoose.model("Post", postSchema);

export default class LikeRepository{
    async getall(){
        try{
            const likes = await LikeModel.find();
            return likes;
        }catch(err){
            throw err;
        }
    }

    async getbyPid(pid){
        try{
            const likes = await LikeModel.find({post:pid});
            return likes;
        }catch(err){
            throw err;
        }
    }

    async toggleLike(pid, uid) {
        try {
          const likeExists = await LikeModel.findOne({ user: uid, post: pid });
      
          if (!likeExists) {
            const like = { user: uid, post: pid };
            const newLike = new LikeModel(like);
            const post = await PostModel.findById(pid);
            post.likes.push(newLike.id);
            console.log(post);
            await newLike.save();
            return post;
          } else {
            const post = await PostModel.findByIdAndUpdate(
              pid,
              { $pull: { like: likeExists._id } },
              { new: true }
            );
            await likeExists.deleteOne({user:uid, post:pid});
            return post;
          }
        } catch (err) {
          throw err;
        }
      }

}