const User = require("../models/userModel");

const createUser = async (user) => {
  user.role = "user";
  user.total = 0;
  const newUser = new User(user);
  return await newUser.save();
};

const getUser = async () => {};

const verifyExistUser = async () => {};

module.exports = { getUser, verifyExistUser, createUser };
