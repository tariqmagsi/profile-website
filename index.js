const express = require("express");
const securityRoutes = require("./server/routes/security-routes");
const messageRoutes = require("./server/routes/message-routes");
require("./server/db/mongoose");
const app = express();
const path = require("path");

app.use(express.json());
app.use(securityRoutes);
app.use(messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("profile/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/profile/build/index.html"));
  });
}
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
