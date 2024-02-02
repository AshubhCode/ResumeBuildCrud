const ObjectId = require("mongoose").Types.ObjectId;

const validateDbId = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: `Given object ID (${req.params.id}) is not valid.`,
    });
  }
  next();
};

const raiseRecord404Error = (req, res) => {
  res.status(404).json({
    error: "No record with given _id: " + req.params.id,
  });
};

const errorHandler = (error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
};

module.exports = {
  validateDbId,
  raiseRecord404Error,
  errorHandler,
};
