
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

    static post(uid,pid,comment){
        const id = comments.length + 1;
        const newComment = new CommentModel(id, uid, pid, comment.content);
        comments.push(newComment);
        return newComment;
    }

    static delete(cid){
        const ind = comments.findIndex(comment => comment.id == cid);
        if(ind!= -1){
            comments.splice(ind, 1);
            return true;
        }else{
            return false;
        }
    }

    static put(cid, comment){ 
        const ind = comments.findIndex(comment => comment.id == cid);
        if(ind!= -1){
            comments[ind].content = comment.content;
            return comments[ind];
        }else{
            return null;
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