import prisma from "../config/db.config.js";
import axios from "axios";
class PostController {
  static async index(req, res) {
    try {
      const posts = await prisma.post.findMany({});
      let userIds = [];
      posts.forEach((item) => userIds.push(item.user_id));
      //  fetch users
      const response = await axios.get(
        `${process.env.AUTH_MICRO_URL}/api/getUsers`,
        userIds
      );
      /* 
      //  METHOD 1
      const users = response.data.users;
      let postWithUsers1 = await Promise.all(
        posts.map((post) => {
          const user = users.find((item) => item.id === post.user_id);
          return {
            ...post,
            user,
          };
        })
      );
      */
      const users = {};
      response.data.users.forEach((item) => {
        users[item.id] = item;
      });

      let postWithUsers2 = await Promise.all(
        posts.map((post) => {
          const user = users[post.user_id];
          return {
            ...post,
            user,
          };
        })
      );
      return res.json({ postWithUsers2 });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong .", error: error.message });
    }
  }
  static async store(req, res) {
    try {
      const authUser = req.user;
      const { title, content } = req.body;
      const post = await prisma.post.create({
        data: {
          user_id: authUser.id,
          title,
          content,
        },
      });
      return res.json({ message: "Post created syccessfully !", post });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong ." });
    }
  }
}

export default PostController;
