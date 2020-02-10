const jwt = require("jsonwebtoken");
const Security = require("../modals/security");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);

    const security = await Security.findOne({
      _id: decoded_token._id,
      "tokens.token": token
    });
    if (!security) {
      throw new Error();
    }
    req.token = token;
    req.security = security;

    next();
  } catch (e) {
    res.send({ error: "Please login first" });
  }
};
module.exports = auth;
