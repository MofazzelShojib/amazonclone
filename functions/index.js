// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51J94mtSC3310zmtu9dfecolPyTRK73QzQj8xIqEGX9SlIwTwzu0cx1z4gJdpO6R8UB2LW9lkRRyk5MRkUVyCMOqb00kkwzWWDm"
    );

//API =>

//App config

const app = express();

//Middlewares

app.use(cors({origin:true}));
app.use(express.json());

//API routes

app.get("/", (request, response) => response.status(200).send ("Hello World"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request for Total >>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //in (stripe) subunits
        currency: "USD",
    });
    //if created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    });
});
// stripe.setMaxNetworkRetries(2);??
//Listen command
exports.api = functions.https.onRequest(app);
