const { validationResult } = require("express-validator");

const expressValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      success: false,
      data: errors.array(),
    });
  }
  next();
};

module.exports = { expressValidator };
