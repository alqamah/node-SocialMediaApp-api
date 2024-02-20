import express from "express";
import cookieParser from "cookie-parser";
import UserRouter from "./src/features/user/user.routes.js";
import PostRouter from "./src/features/post/post.routes.js";
import CommentRouter from "./src/features/comment/comment.routes.js";
import LikeRouter from "./src/features/like/like.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', UserRouter);
app.use('/api/post', PostRouter);
app.use('/api/comment', CommentRouter);
app.use('/api/like', LikeRouter);

export default app;
