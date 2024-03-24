import PostRepository from './post.repo.js';

export default class PostController{

    async getall(req, res){
        try{
            const posts = await PostRepository.getall();
            if(posts)
                return res.status(200).send(posts);
            else
                return res.status(404).send("No posts found");
        }catch(err){
            return res.status(500).send(err.message);
        }
    }

    async getByPid(req, res){
        try{
            const pid = req.params.pid;
            const post = await PostRepository.getByPid(pid);
            if(post)
                return res.status(200).send(post);
            else
                return res.status(404).send("No post found");
        }catch(err){
            return res.status(500).send(err.message);
        }
    }

    async getByUid(req, res){
        try{
            const uid = req.cookies.userId;
            const posts = await PostRepository.getByUid(uid);
            if(posts)
                return res.status(200).send(posts);
            else
                return res.status(404).send("No posts found");   
        } catch(err){
            return res.status(500).send(err.message);
        }
    }

    async create(req, res){
        try{
            const post ={
                userId: Number(req.cookies.userId),
                caption: req.body.caption,
                imageUrl: req.file.filename,
            }
            const result = await PostRepository.add(post);
            if(result)
                return res.status(201).send(result);
            return res.status(400).send("error");
        }catch(err){
            return res.status(500).send(err.message);
        }
    }

    async delete(req, res){
        try{
            const pid = req.params.id;
            const uid = Number(req.cookies.userId);
            const resp = await PostRepository.delete(pid, uid);
            res.status(200).send({msg: "Post deleted successfully", data: resp});
        }catch(err){
            throw err;
        }
    }

    async update(req, res){
        try{
            const {caption, imageUrl} = req.body;
            const uid = Number(req.cookies.userId);
            post.imageUrl = req.file.imageUrl;
            const result = await PostRepository.update(uid, {caption, imageUrl, uid});
            if(result)
                return res.status(200).send({msg: "Post updated successfully", data: result});
            return res.status(404).send("Post not Found!");
        }catch(err){
            return res.status(400).send(err.message);
        }
    }
}