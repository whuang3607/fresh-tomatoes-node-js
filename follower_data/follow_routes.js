import * as dao from "./follow_dao.js"
function FollowRoutes(app) {
    const findAllFollowingUsers = async (req, res) => {
        const user = await dao.findAllFollowingUsers(req.params.userId);
        res.json(user);
    };

    const followUser = async (req, res) => {
        try {
          const userId = req.params.userId;
          const { usernameToFollow } = req.body;
      
          const followingUsers = await dao.followUser(userId, usernameToFollow);
          res.json({ followingUsers });
        } catch (error) {
          console.error("Error following user:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
    };
    app.get("/api/following", findAllFollowingUsers);
    app.post("/api/following", followUser);
}

export default FollowRoutes;