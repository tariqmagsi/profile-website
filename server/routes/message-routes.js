const express = require("express");
const Messages = require("../modals/message");
const routes = express.Router();
const { recieveEmail } = require("../email/email");
const url = require("url");

routes.post("/messages", async (req, res) => {
  try {
    const messages = await Messages(req.body).save();
    recieveEmail(req.body.name, req.body.email, req.body.message);

    res.send({ success: true, messages });
  } catch (e) {
    res.send({ success: false });
  }
});

routes.get(
  "/fjaogiofeajfioajfeioajfoidajfodsajfidosamfdsajfldksajfkdessagefjdklsajfkldss",
  async (req, res) => {
    try {
      const messages = await Messages.find({});

      if (!messages) {
        return res.send({ error: "No Messages Found", success: false });
      }

      res.send({ success: true, messages });
    } catch (e) {
      res.send({ success: false });
    }
  }
);

module.exports = routes;
