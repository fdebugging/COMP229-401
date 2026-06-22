const Project = require("../models/Project");

exports.getAll = async (req, res, next) => {
  try {

    const projects = await Project.find();

    const result = projects.map(project => ({
      title: project.title,
      completion: project.completion,
      description: project.description,
      image: project.image,
      id: project._id
    }));

    res.json({
      success: true,
      message: "Projects list retrieved successfully.",
      data: result
    });

  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {

    const project = await Project.findById(req.params.id);

    res.json({
      success: true,
      message: "Project retrieved successfully.",
      data: {
        title: project.title,
        completion: project.completion,
        description: project.description,
        image: project.image,
        id: project._id
      }
    });

  } catch (err) {
    next(err);
  }
};

exports.add = async (req, res, next) => {
  try {

    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      message: "Project added successfully.",
      data: {
        title: project.title,
        completion: project.completion,
        description: project.description,
        image: project.image,
        id: project._id
      }
    });

  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {

    await Project.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "Project updated successfully."
    });

  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {

    await Project.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Project deleted successfully."
    });

  } catch (err) {
    next(err);
  }
};