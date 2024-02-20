import LikeModel from "./like.model.js";

export default class LikeController{
    getall(req, res){
        return res.send(LikeModel.getall());
    }

    getbyPid(req, res){
        const pid = req.params.pid;
        const likes = LikeModel.getbyPid(pid);
        const count = likes.length;
        return res.send({likes, count});
    }

    toggleLike(req, res){
        const pid = req.params.pid;
        const uid = req.cookies.uid;
        const result = LikeModel.toggleLike(pid, uid);
        if(result)
            return res.send("like toggled");
        else
            return res.send("not found!");
    }
}