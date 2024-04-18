import adminModel from "./admin_model";
export const createUser = (user) => adminModel.create(user);
export const findAllUsers = () => adminModel.find();
export const findUserById = (userId) => adminModel.findById(userId);
export const findUserByUsername = (username) =>
adminModel.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
adminModel.findOne({ username, password });
export const updateUser = (userId, user) =>
adminModel.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => adminModel.deleteOne({ _id: userId });