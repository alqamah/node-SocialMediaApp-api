//post

import express from 'express'
import PostController from './post.controller.js';
//import {upload} from '../../middlewares/file-upload.middleware.js';
import jwtAuth from '../middleware/jwtauth.middleware.js';
const router = express.Router();

const postController = new PostController();

router.use(jwtAuth);
router.get('/all', postController.getall);
router.get('/:pid', postController.getByPid);
router.get('/', postController.getByUid);


export default router;
