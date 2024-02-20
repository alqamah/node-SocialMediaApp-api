import { UserModel } from "../user/user.model.js";
export default class PostModel{
    constructor(id, userId, caption, imageUrl){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }

    static getall(){
        return posts;
    }

    static getByUid(uid){
        return posts.filter(post => post.userId == uid);
    }

    static getByPid(pid){
        return posts.find(post => post.id == pid);
    }

    static add(post){
        const pid = posts.length + 1;
        const newPost = new PostModel(pid, post.userId, post.caption, post.imageUrl);
        posts.push(newPost);
        return newPost;
    }

    static delete(pid){
        const post = posts.find(post => post.id == pid);
        if(post){
            posts.splice(posts.indexOf(post), 1);
            return post;
        }else{
            return null;
        }
    }

    static put(pid, post){
        const postind = posts.findIndex(post => post.id == pid);
        if(postind!= -1){
            posts[postind].caption = post.caption;
            posts[postind].caption = post.imageUrl;
            return posts[postind];
        }else{
            console.log('nf');
            return null;
        }
    }
   
}

let posts = [
    new PostModel(1, 1, "post 1 caption", "post1.jpg"),
    new PostModel(2, 1, "post 2 caption", "post2.jpg"),
    new PostModel(3, 2, "post 3 caption", "post3.jpg"),
    new PostModel(4, 2, "post 4 caption", "post4.jpg"),
    new PostModel(5, 2, "post 5 caption", "post5.jpg"),
]