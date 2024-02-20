import CommentModel from './comment.model.js';

export default class CommentController{

    getall(req,res){
        const comments = CommentModel.getall();
        if(comments)
            return res.status(200).send(comments);
        else
            return res.status(404).send("No comments found");
    }

    getByPid(req, res){
        const pid = req.params.pid;
        const post = CommentModel.get(pid);
        if(post)
            return res.status(200).send(post);
        else
            return res.status(404).send("No post found");
    }

    postComment(req, res){
        const pid = req.params.pid;
//      const uid = req.cookies.uid;
        const result = CommentModel.post(pid,req.body);
        if(result)
            return res.status(201).send(result);
        return res.status(400).send("error");
    }

    updateComment(req, res){
        const cid = req.params.cid;
//        const uid = req.cookies.uid;

        const result = CommentModel.put(cid, req.body);
        if(result)
            return res.status(200).send(result);
        return res.status(404).send("not found");
    }

    deleteComment(req, res){
        const cid = req.params.cid;
        const result = CommentModel.delete(cid);
        if(result)
            return res.status(200).send(result);
        else
            return res.status(404).send("not found");
    }
}