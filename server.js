const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const formidable = require('express-formidable');
const userRoutes = require('./server/routes/userRoutes')
const bookingRoutes = require('./server/routes/bookingRoutes');

require("dotenv").config();

//set up express

const app = express();
const PORT = process.env.PORT || 5000;
console.log("starting server");
app.listen(PORT, () => { console.log(`server started on port : ${PORT}`) });

// app.use(cors());

// for parsing application/json
app.use(express.json());

// set up mangoose
console.log("connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/motoAssist",
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true },
    (err) => {
        if (err)
            return console.error(err);
        console.log("mongoDB connection established")
    });


// set up routes
app.use('/api/auth', userRoutes)
app.use('/api/bookings', bookingRoutes)


if(process.env.NODE_ENV === "production")
{
    app.use(express.static('client/build'));
}