const User = require("../models/userModel");

const createUser = async (user) => {
  user.role = "user";

  const newUser = new User(user);
  return await newUser.save();
};

const getUser = async () => {};
/* Vefica si el usuario ya existe */
const verifyExistUser = async () => {};

module.exports = { getUser, verifyExistUser, createUser };
