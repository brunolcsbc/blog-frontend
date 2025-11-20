import { Request, Response, NextFunction } from "express";

export class PostController{

    create(req: Request, res: Response, next: NextFunction) {
        try {
            res.render('pages/createPosts');
        } catch (err) {
            next(err);
        }
    }

    getPosts(req: Request, res: Response, next: NextFunction) {
        try {
            res.render('pages/getPosts');
        } catch (err) {
            next(err);
        }
    }

    searchPosts(req: Request, res: Response, next: NextFunction) {
        try {
            res.render('pages/searchPosts');
        } catch(err) {
            next(err);
        }
    }

}
