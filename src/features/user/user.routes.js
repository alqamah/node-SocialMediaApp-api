//user

import express from "express";
import UserController from "./user.controller.js";

const userController = new UserController();

const router = express.Router();



router.post('/signup', (req, res)=>{ 
    userController.signUp(req, res)
});
router.post('/signin', (req, res)=>{ 
    userController.signIn(req, res)
});
router.post('/reset-password', (req, res)=>{ 
    userController.resetPassword(req, res)
});
router.post('/logout', (req, res)=>{ 
    userController.logout(req, res)
});

export default router;