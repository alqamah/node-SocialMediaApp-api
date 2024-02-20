
export default class LikeModel{
    constructor(id, userId, postId, flag){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.flag = flag;
    }

    static getall(){
        return likes;
    }

    static getbyPid(pid){
        const postLikes = likes.filter(like => like.postId == pid && like.flag == true);
        return postLikes;
    }
    
    static toggleLike(pid, uid){
        const likeInd = likes.findIndex(like => like.postId == pid && like.userId == uid);
        if(likeInd!= -1){
            likes[likeInd].flag =!likes[likeInd].flag;
            return true;
        }
        return false;
    }
   
}

let likes = [
    //id, uid, pid, flag
    new LikeModel(1, 1, 1, false),
    new LikeModel(2, 2, 1, true),
    new LikeModel(3, 1, 2, false),
    new LikeModel(4, 2, 2, true),
    new LikeModel(5, 1, 3, true),
]