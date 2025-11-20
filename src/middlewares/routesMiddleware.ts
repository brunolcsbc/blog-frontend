import { Express } from "express";
import AuthRoutes from "../routes/authRoutes";
import PostRoutes from "../routes/postRoutes";

export function registerRoutes(app: Express) {
    app.use("/auth", AuthRoutes);
    app.use("/post", PostRoutes);
}