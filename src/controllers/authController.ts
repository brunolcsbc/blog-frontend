import { Request, Response, NextFunction } from "express";

export class AuthController{

    login(req: Request, res: Response, next: NextFunction) {
        try {
            res.render('pages/login');
        } catch (err) {
            next(err);
        }
    }

    register(req: Request, res: Response, next: NextFunction) {
        try {
            res.render('pages/register');
        } catch (err) {
            next(err);
        }
    }

}
