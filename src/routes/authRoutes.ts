import { AuthController } from "../controllers/authController";
import { Router } from "express";

const router = Router();

const controller = new AuthController();


router.get('/login', controller.login.bind(controller));
router.get('/register', controller.register.bind(controller));


export default router;