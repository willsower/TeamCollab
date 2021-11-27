// function validate(method) {

// }

exports.validate = (method) => {
  return [
    body("email", "Invalid email").exists().isEmail().normalizeEmail(),
    body("password").exists().isLength({ min: 8 }),
  ];
};
