//post

import express from 'express'
import PostController from './post.controller.js';
import jwtAuth from '../../middleware/jwtauth.middleware.js';
import { upload } from '../../middleware/fileupload.middleware.js';

const router = express.Router();

const postController = new PostController();

router.use(jwtAuth);

router.get('/all', postController.getall);
router.get('/:pid', postController.getByPid);
router.get('/', postController.getByUid);
router.post('/',upload.single('imageUrl'), postController.create);
router.put('/:id',upload.single('imageUrl'), postController.update);
router.delete('/:id', postController.delete);

export default router;
