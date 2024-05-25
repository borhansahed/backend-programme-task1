import { Router } from "express";
import { PostController } from "../../module/post/post.controller.js";
import { zodValidation } from "../../middleware/zodValidation.js";
import { postSchema } from "../../schema/post.schema.js";

const router = Router();

router.post("/create", zodValidation(postSchema), PostController.create);

export const postRoutes = router;
