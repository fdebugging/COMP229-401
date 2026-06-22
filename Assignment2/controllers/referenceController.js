const Reference = require("../models/Reference");

exports.getAll = async (req, res, next) => {
  try {
    const references = await Reference.find();

    const result = references.map(reference => ({
      name: reference.name,
      testimonial: reference.testimonial,
      position: reference.position,
      company: reference.company,
      id: reference._id
    }));

    res.json({
      success: true,
      message: "References list retrieved successfully.",
      data: result
    });

  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {

    const reference = await Reference.findById(req.params.id);

    res.json({
      success: true,
      message: "Reference retrieved successfully.",
      data: {
        name: reference.name,
        testimonial: reference.testimonial,
        position: reference.position,
        company: reference.company,
        id: reference._id
      }
    });

  } catch (err) {
    next(err);
  }
};

exports.add = async (req, res, next) => {
  try {

    const reference = await Reference.create(req.body);

    res.status(201).json({
      success: true,
      message: "Reference added successfully.",
      data: {
        name: reference.name,
        testimonial: reference.testimonial,
        position: reference.position,
        company: reference.company,
        id: reference._id
      }
    });

  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {

    await Reference.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "Reference updated successfully."
    });

  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {

    await Reference.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Reference deleted successfully."
    });

  } catch (err) {
    next(err);
  }
};