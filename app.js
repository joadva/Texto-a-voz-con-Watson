const express = require("express");

const app = express();
const { IamTokenManager } = require("ibm-watson/auth");

// Bootstrap application settings
require("./config/express")(app);

const serviceUrl = process.env.SPEECH_TO_TEXT_URL;

const tokenManager = new IamTokenManager({
  apikey: process.env.SPEECH_TO_TEXT_IAM_APIKEY || "<iam_apikey>",
});

app.get("/", (req, res) => res.render("index"));

// Get credentials using your credentials
app.get("/api/v1/credentials", async (req, res, next) => {
  try {
    const accessToken = await tokenManager.getToken();
    res.json({
      accessToken,
      serviceUrl,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = app;
