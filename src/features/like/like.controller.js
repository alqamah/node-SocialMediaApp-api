import LikeRepository from "./like.repo.js";

const likeRepo = new LikeRepository();

export default class LikeController{
    async getall(req, res){
        try{
            const resp = await likeRepo.getall()
            return res.status(200).send(resp);
        }catch(err){
            console.log(err);
            return res.status(500).send("Server-side Error");
        }
    }

    async getbyPid(req, res){
        const {pid} = req.params;
        try{
            const resp = await likeRepo.getbyPid(pid);
            return res.status(200).send(resp); 

        }catch(err){
            console.log(err);

            return res.status(500).send("Server-side Error")
        }
        
    }

    async toggleLike(req, res){
        try{
            const pid = req.params.pid;
            const uid = req.cookies.userId;
            const result = await likeRepo.toggleLike(pid, uid);
            return res.status(200).send({msg:"Like Toggled", post:result});
        }catch(err){
            console.log(err);

            return res.status(500).send("Server-side Error");
        }
    }

}