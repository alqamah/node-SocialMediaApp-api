import PostModel from './post.model.js';

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
        const post = PostModel.add(req.body);
        if(post)
            return res.status(201).send(post);
        return res.status(400).send("error");
    }

    delete(req, res){
        const post = PostModel.delete(req.params.id);
        if(post)
            return res.status(200).send(post);
        else
            return res.status(404).send("not found");
    }

    update(req, res){
        const post = PostModel.put(req.params.id, req.body);
        if(post)
            return res.status(200).send(post);
        return res.status(404).send("not found");
    }
}