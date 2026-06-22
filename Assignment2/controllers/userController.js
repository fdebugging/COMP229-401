const User = require("../models/User");

exports.getAll = async (req, res, next) => {
  try {

    const users = await User.find();

    const result = users.map(user => ({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      created: user.created,
      updated: user.updated,
      id: user._id
    }));

    res.json({
      success: true,
      message: "Users list retrieved successfully.",
      data: result
    });

  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {

    const user = await User.findById(req.params.id);

    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        created: user.created,
        updated: user.updated,
        id: user._id
      }
    });

  } catch (err) {
    next(err);
  }
};

exports.add = async (req, res, next) => {
  try {

    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "User added successfully.",
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        created: user.created,
        updated: user.updated,
        id: user._id
      }
    });

  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {

    await User.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "User updated successfully."
    });

  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {

    await User.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "User deleted successfully."
    });

  } catch (err) {
    next(err);
  }
};