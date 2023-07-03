const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 8080;

// GET ROUTES
const bookRoute = require("./routes/book");
const authorRoute = require("./routes/author");


// Connect database
mongoose.connect((process.env.MONGOOSE_URL), { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => console.log(err))


app.use(bodyParser.json({ limit: "50mb"}));
app.use(cors());
app.use(morgan('common'));


// ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);



app.listen(PORT, () => {
    console.log("Server is running...")
})