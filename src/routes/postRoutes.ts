import { PostController } from "../controllers/postController";
import { Router } from "express";

const router = Router();

const controller = new PostController();


router.get('/create', controller.create.bind(controller));
router.get('/getposts', controller.getPosts.bind(controller));
router.get('/searchposts', controller.searchPosts.bind(controller));

export default router;