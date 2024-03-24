import CommentRepository from './comment.repo.js';

export default class CommentController {
    async getall(req, res) {
        try {
            const comments = await CommentRepository.getall();
            if (comments.length > 0)
                return res.status(200).send(comments);
            else
                return res.status(404).send({ msg: "No comments found" });
        } catch (err) {
            return res.status(500).send({ msg: err.message });
        }
    }

    async getByPid(req, res) {
        try {
            const pid = req.params.pid;
            const comments = await CommentRepository.getByPostId(pid);
            if (comments.length > 0)
                return res.status(200).send(comments);
            else
                return res.status(404).send({ msg: "No comments found for this post" });
        } catch (err) {
            return res.status(500).send({ msg: err.message });
        }
    }

    async postComment(req, res) {
        try {
            const pid = req.params.pid;
            const uid = req.cookies.userId;
            const content = req.body.content;
            const post = {
                userId: uid,
                postId: pid,
                content
            }
            const result = await CommentRepository.add(post);
            if (result)
                return res.status(201).send(result);
            return res.status(400).send({ msg: "Error creating comment" });
        } catch (err) {
            return res.status(500).send({ msg: err.message });
        }
    }

    async updateComment(req, res) {
        try {
            const cid = req.params.cid;
            const uid = req.cookies.userId;
            const { content } = req.body;
            const result = await CommentRepository.updateComment(uid, cid, content);
            if (result)
                return res.status(200).send(result);
            return res.status(404).send({ msg: "Comment not found or access denied" });
        } catch (err) {
            return res.status(500).send({ msg: err.message });
        }
    }

    async deleteComment(req, res) {
        try {
            const cid = req.params.cid;
            const uid = req.cookies.userId;
            const result = await CommentRepository.deleteComment(uid, cid);
            if (result)
                return res.status(200).send({ msg: "Comment deleted successfully" });
            else
                return res.status(404).send({ msg: "Comment not found or access denied" });
        } catch (err) {
            return res.status(500).send({ msg: err.message });
        }
    }
}