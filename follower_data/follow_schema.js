import mongoose from "mongoose";

const FollowSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  following: [{
    type: String,
    ref: 'users',
  }],
},{ collection: "follow" });

export default FollowSchema;