const express = require("express");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);



require("dotenv").config();

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const mg = mailgun.client({
  username: "Zoila Montes Capa",
  key: process.env.API_SECRET
});

app.post("/send-email", (req, res) => {
  console.log(req.body);
  try {
    mg.messages
      .create(process.env.DOMAIN, {
        from: `${req.body.name} <${req.body.email}>`,
        to: "zmc.dev2019@gmail.com",
        subject: req.body.subject,
        text: req.body.text,
      })
      .then((msg) => res.json(msg.message)) // logs response data
      .catch((err) => res.json(err.message)); // logs any error
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.all("*", (req, res) => {
  res.status(404).json("Cette route n'existe pas");
});

app.listen(3001, () => {
  console.log("Server started");
});


/* pour appeler une variable d'environnement = process.env.PORT */