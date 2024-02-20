//comment

import express from 'express'
import CommentController from './comment.controller.js';
//import {upload} from '../../middlewares/file-upload.middleware.js';
import jwtAuth from '../../middleware/jwtauth.middleware.js';
const router = express.Router();

const commentController = new CommentController();

router.use(jwtAuth);

router.get('/all', commentController.getall);
router.get('/:pid', commentController.getByPid);
router.post('/:pid', commentController.postComment);
router.delete('/:cid', commentController.deleteComment);
router.put('/:cid',commentController.updateComment);


export default router;
