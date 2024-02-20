import PostModel from './post.model.js';
import { UserModel } from '../user/user.model.js';

export default class PostController{

    getall(req, res){
        const posts = PostModel.getall();
        if(posts)
            return res.status(200).send(posts);
        else
            return res.status(404).send("No posts found");
    }

    getByPid(req, res){
        const pid = req.params.id;
        const post = PostModel.getByPid(pid);
        if(post)
            return res.status(200).send(post);
        else
            return res.status(404).send("No post found");
    }

    getByUid(req, res){
        const uid = req.cookies.uid;
        const posts = PostModel.getByUid(uid);
        if(posts)
            return res.status(200).send(posts);
        else
            return res.status(404).send("No posts found");        
    }

    create(req, res){
        const post = req.body;
        post.userId = Number(req.cookies.uid);
        const result = PostModel.add(req.body);
        if(result)
            return res.status(201).send(result);
        return res.status(400).send("error");
    }

    delete(req, res){
        const post = PostModel.delete(req.params.id, Number(req.cookies.uid));
        if(post)
            return res.status(200).send(post);
        else
            return res.status(404).send("not found");
    }

    update(req, res){
        const post = req.body;
        const uid = Number(req.cookies.uid);
        const result = PostModel.put(uid, req.params.id, post);
        if(result)
            return res.status(200).send(result);
        return res.status(404).send("not found");
    }
}