const express = require("express");
const Security = require("../modals/security");
const routes = express.Router();
const auth = require("../middleware/auth");

routes.post("/security", async (req, res) => {
  try {
    const security = await Security(req.body).save();
    const token = await security.generateAuthToken();
    security.save();
    res.send({ success: true, security, token });
  } catch (e) {
    res.send({ success: false });
  }
});
/*routes.get("/security", auth, async (req, res) => {
  try {
    const security = await Security.find({});
    if (!security) {
      res.send({ success: false });
    }

    res.send({ success: true, security });
  } catch (e) {
    res.send({ success: false });
  }
});*/
routes.post("/security/login", async (req, res) => {
  try {
    const security = await Security.findByCredentials(
      req.body.question,
      req.body.answer
    );
    const token = await security.generateAuthToken();
    res.send({ success: true, token });
  } catch (e) {
    res.send({ success: false });
  }
});
routes.post("/security/logout", auth, async (req, res) => {
  try {
    const { security, token } = req;
    security.tokens = security.tokens.filter(t => t.token !== token);
    await security.save();
    res.send({ security, success: true });
  } catch (e) {
    res.send({ e, success: false, error: "You are already logged out" });
  }
});

module.exports = routes;
