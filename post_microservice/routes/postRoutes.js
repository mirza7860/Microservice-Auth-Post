import { Router } from "express";
import PostController from "../controller/PostController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = Router();

router.post("/post", authMiddleware, PostController.store);
router.get("/post", PostController.index);
export default router;
