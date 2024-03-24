import mongoose from "mongoose";
import { commentSchema } from "./comment.schema.js";

const CommentModel = mongoose.model("Comment", commentSchema);

export default class CommentRepository {
    async getall() {
        try {
            const comments = await CommentModel.find();
            return comments;
        } catch (err) {
            throw err;
        }
    }

    async getByPostId(postId) {
        try {
            const comments = await CommentModel.find({ postId });
            return comments;
        } catch (err) {
            throw err;
        }
    }

    async add(comment) {
        try {
            const newComment = new CommentModel(comment);
            const result = await newComment.save();
            return result;
        } catch (err) {
            throw err;
        }
    }

    async updateComment(uid, cid, content) {
        try {
            const updatedComment = await CommentModel.findOneAndUpdate(
                { _id: cid, userId: uid },
                { content },
                { new: true }
            );
            if (!updatedComment) throw new Error("Comment not found or access denied");
            return updatedComment;
        } catch (err) {
            throw err;
        }
    }

    async deleteComment(uid, cid) {
        try {
            const result = await CommentModel.findOneAndDelete({ _id: cid, userId: uid });
            if (!result) throw new Error("Comment not found or access denied");
            return result;
        } catch (err) {
            throw err;
        }
    }
}