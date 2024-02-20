
import PostModel from "../post/post.model.js";
export default class CommentModel{
    constructor(id, userId, postId, content){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static getall(){
        return comments;
    }

    static get(pid){
        const ncomments = comments.filter(comment => comment.postId == pid);
        return ncomments;
    }

    static post(uid,pid,content){
        const id = comments.length + 1;
        const posts = PostModel.getall();
        const post = posts.find(post => post.id == pid);
        if(!post)
            return null;
        const newComment = new CommentModel(id, uid, pid, content);
        comments.push(newComment);
        return newComment;
    }

    static put(uid, cid, comment){ 
        const ind = comments.findIndex(comment => comment.id == cid && comment.userId == uid);
        if(ind!= -1){
            comments[ind].content = comment.content;
            return comments[ind];
        }else{
            return null;
        }
    }

    static delete(cid, uid){
        const ind = comments.findIndex(comment => comment.id == cid && comment.userId == uid);
        if(ind!= -1){
            comments.splice(ind, 1);
            return true;
        }else{
            return false;
        }
    }
   
}

let comments = [
    new CommentModel(1, 1, 1, "comment uid 1 pid 1 cid 1"),
    new CommentModel(2, 1, 1, "comment uid 1 pid 1 cid 2"),
    new CommentModel(3, 2, 1, "comment uid 2 pid 1 cid 3"),
    new CommentModel(4, 2, 2, "comment uid 2 pid 2 cid 4"),
    new CommentModel(5, 1, 2, "comment uid 1 pid 2 cid 5"),
]