const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();


app.use(bodyParser.json());
app.use(cors())
//Import routes
const postRoute = require('./routes/routes');

//HTTP request logger
app.use('/posts', postRoute);




app.get("/", (req, res) => {
    res.send({ message: "We did it!" });
});

//Connect to db
mongoose.connect(process.env.DATABASE_ACCESS, {
    useUnifiedTopology: true,
    useNewUrlParser: true
},
    () => {
        console.log('connected to db')
    })

// How do we start listening to the server?
app.listen(port);