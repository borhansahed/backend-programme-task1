import { PostService } from "./post.service.js";

const create = async (req, res) => {
  const body = req.body;
  const result = PostService.create(body);

  res.status(201).json({ message: "Post Created Successfully", data: result });
};

export const PostController = {
  create,
};
