import express from "express";
import {
  deletePost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/like", likePost);

/* DELETE */
// router.delete("/:id/delete", verifyToken, deletePost);
router.delete("/:id/delete", deletePost);

export default router;
