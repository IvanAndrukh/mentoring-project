module.exports = (handler, httpStatusCode = 200) => async (req, res, next) => {
  try {
    const data = await handler(req);

    res.status(httpStatusCode).json(data);
  } catch (error) {
    next(error);
  }
};
