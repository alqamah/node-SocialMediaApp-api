//post

import express from 'express'
import LikeController from './like.controller.js';
import jwtAuth from '../middleware/jwtauth.middleware.js';

const router = express.Router();

const likeController = new LikeController();

router.use(jwtAuth);

router.get('/all/', likeController.getall);
router.get('/:pid', likeController.getbyPid);
router.get('/toggle/:pid', likeController.toggleLike);

export default router;
