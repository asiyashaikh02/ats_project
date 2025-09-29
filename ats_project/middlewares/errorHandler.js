// middlewares/errorHandler.js
function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: err.message,
      errors: err.errors,
    });
  }

  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;
