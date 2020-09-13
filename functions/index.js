const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQp2uDmSveyIBHGjW4UIx9lbfkQCXzoMFg2AYjUMEQnaUEygP6yzqXlqPt0mxIViK1sF8iRF1JuMGkPDtvf2vc200XG7MfjNm"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json);

// API - routes
app.get("/", (req, res) => res.status(200).send("hello world"));

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-react-133ca/us-central1/api
