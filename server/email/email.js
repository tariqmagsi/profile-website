const sgmail = require("@sendgrid/mail");

sgmail.setApiKey(process.env.SENDGRID_API_KEY);
const recieveEmail = (name, email, text) => {
  const msg = {
    to: "tariqmagsi125@gmail.com",
    from: email,
    subject: `MY WEBSITE MAIL From ${name}`,
    text: text
  };
  sgmail.send(msg);
};

module.exports = { recieveEmail };
