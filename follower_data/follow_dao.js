import follow_model from "./follow_model";
export const findAllFollowingUsers = (userId) => follow_model.findById(userId);
export const followUser = (userId, userNameToFollow) => {
    try {
        let followData =  follow_model.findOne({ user: userId });
        if (!followData) {
          followData = new follow_model({ user: userId, following: [] });
        }
        if (!followData.following.includes(userNameToFollow)) {
          followData.following.push(userNameToFollow);
        followData.save();
        }
        return followData.following;
      } catch (error) {
            throw error;
      }
}
