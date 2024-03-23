import PostRepository from './post.repo.js';
import { UserModel } from '../user/user.model.js';

export default class PostController{

    getall(req, res){
        try{
            const posts = PostRepository.getall();
            if(posts)
                return res.status(200).send(posts);
            else
                return res.status(404).send("No posts found");
        }catch(err){
            return res.status(500).send(err.message);
        }
    }

    getByPid(req, res){
        try{
            const pid = req.params.pid;
            const post = PostRepository.getByPid(pid);
            if(post)
                return res.status(200).send(post);
            else
                return res.status(404).send("No post found");
        }catch(err){
            return res.status(500).send(err.message);
        }
    }

    getByUid(req, res){
        try{
            const uid = req.cookies.uid;
            const posts = PostRepository.getByUid(uid);
            if(posts)
                return res.status(200).send(posts);
            else
                return res.status(404).send("No posts found");   
        } catch(err){
            return res.status(500).send(err.message);
        }
    }

    create(req, res){
        try{
            const post ={
                userId: Number(req.cookies.userId),
                caption: req.body.caption,
                imageUrl: req.file.filename,
            }
            const result = PostRepository.add(post);
            if(result)
                return res.status(201).send(result);
            return res.status(400).send("error");
        }catch(err){
            return res.status(500).send(err.message);
        }
    }

    delete(req, res){
        const post = PostModel.delete(req.params.id, Number(req.cookies.uid));
        if(post)
            return res.status(200).send(post);
        else
            return res.status(404).send("post not found or access denied");
    }

    update(req, res){
        const post = req.body;
        const uid = Number(req.cookies.uid);
        post.imageUrl = req.file.imageUrl;
        const result = PostModel.put(uid, req.params.id, post);
        if(result)
            return res.status(200).send(result);
        return res.status(404).send("post not found or access denied");
    }
}