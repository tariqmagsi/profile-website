const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const securitySchema = mongoose.Schema({
  question: {
    type: String
  },
  answer: {
    type: String
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

securitySchema.methods.toJSON = function() {
  const security = this;
  const publicSecurityData = security.toObject();
  delete publicSecurityData.question;
  delete publicSecurityData.answer;
  delete publicSecurityData.tokens;
  return publicSecurityData;
};
securitySchema.statics.findByCredentials = async (question, answer) => {
  const security = await Security.findOne({});
  const isMatch1 = await bcrypt.compare(question, security.question);

  if (!isMatch1) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(answer, security.answer);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return security;
};
securitySchema.methods.generateAuthToken = async function() {
  const security = this;

  const token = jwt.sign(
    { _id: security._id.toString() },
    process.env.JWT_SECRET
  );

  security.tokens = security.tokens.concat({ token });
  await security.save();
  return token;
};

securitySchema.pre("save", async function(next) {
  const security = this;
  if (security.isModified("question"))
    security.question = await bcrypt.hash(security.question, 8);
  if (security.isModified("answer"))
    security.answer = await bcrypt.hash(security.answer, 8);

  next();
});

const Security = mongoose.model("Security", securitySchema);

module.exports = Security;
