import express from "express";
import bodyParser from "body-parser";
import { postRoutes } from "./routes/post/post.route.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/posts", postRoutes);

// not found routes
app.use("*", (req, res) => {
  res.status(404).send({
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Not Found",
      },
    ],
  });
});
// Error handling middleware
app.use(globalErrorHandler);

export default app;
