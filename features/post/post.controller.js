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
        const pid = req.params.pid;
        const post = PostModel.getByPid(pid);
        if(post)
            return res.status(200).send(post);
        else
            return res.status(404).send("No post found");
    }

    getByUid(req, res){
        const email = req.cookies.email;
        const posts = PostModel.getByUid(email);
        if(posts)
            return res.status(200).send(posts);
        else
            return res.status(404).send("No posts found");        
    }
}