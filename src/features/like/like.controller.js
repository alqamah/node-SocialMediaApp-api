import LikeRepository from "./like.repo.js";

export default class LikeController{
    async getall(req, res){
        try{
            const resp = await LikeRepository.getall()
            return res.status(200).send(resp);
        }catch(err){
            return res.status(500).send("Server-side Error");
        }
    }

    async getbyPid(req, res){
        const {pid} = req.params;
        try{
            const resp = await LikeRepository.getbyPid(pid);
            return res.status(200).send(resp); 

        }catch(err){
            return res.status(500).send("Server-side Error")
        }
        
    }

    async toggleLike(req, res){
        try{
            const pid = req.params.pid;
            const uid = req.cookies.userId;
            const result = await LikeRepository.toggleLike(pid, uid);
            return res.status(200).send({msg:"Like Toggled", post:result});
        }catch(err){
            return res.status(500).send("Server-side Error");
        }
    }

}