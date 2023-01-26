const { schema } = require('./schemas');

const inputsValidation = async (req, res, next) => {
  try {
    const { body } = req;
    const result = await schema.validateAsync(body);
    console.log(result);
    next();
  } catch (error) {
    if (error.isJoi === true) return res.status(400).send({ message: error.message });
  }
};
module.exports = inputsValidation;