// Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_CON;
const sendMails = require("./mail");
const {isEmail} = require("validator")
// Models
const Reservation = require("./models/reservation");

// CORS options, to allow my React app to use my API.
const corsOptions = {
  origin: process.env.FRONTEND,
  optionsSuccessStatus: 200,
};

// init app
const app = express();
// MongoDb Stuff
mongoose.connect(process.env.DB_CON);

const db = mongoose.connection;

db.on("error", (error) => console.log("something went wrong:" + error));
db.once("open", () => console.log("connected to db"));

// middle ware
app.use(express.json());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

app.post("/book", async (req, res) => {
  const { date, time, firstName, lastName, phoneNumber, email } = req.body;

  // Check if all feilds are entered.
  if (!date || !time || !firstName || !lastName || !phoneNumber || !email) {
    return res.status(400).json({ msg: "not all feilds entered" });
  }
  
  // Check if time between 9 am and 8 pm. 
  if (time < 9 || time > 20) {
    return res.status(400).json({ msg: "time only allowed between 9 and 20" });
  }

  // Check if there is a reservation on the same date and time.
  const checkReservation = await Reservation.findOne({
    date: date,
    time: time,
  });

  if (checkReservation) {
    return res.status(409).json({ msg: "reserveration is already taken." });
  }

  // Check if email is valid
  if(!isEmail(email)){
    return res.status(200).json({msg:"email is not valid"})
  }

  const newReservation = new Reservation({
    date: date,
    time: time,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  });

  try {
    await newReservation.save();

    try {
      var amTime
      if(time <= 12){
        amTime = time +'' +" am"
      }else{
      
        amTime = (time-12) +''+ " pm"
      }
      sendMails(email, email, date, amTime, firstName + ' ' + lastName, phoneNumber);

      return res.status(201).json({ msg: "Appintment saved and emails sent sucessfully" });
    } catch(error) {
      console.log(error)
      return res
        .status(500)
        .json({
          msg: "appointment was saved, but something went wrong with sending emails",
        });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "soemthing went wrong: " + err.message });
  }
});

app.get("/getBookings", async (req, res) => {
  const date = req.body.date;

  if (!date) {
    res.status(400).json({ msg: "no date provided" });
  }

  const reservations = await Reservation.find({ date: date });

  bookingTimes = reservations.map((b) => b.time);

  return res.status(200).json({ times: bookingTimes });
});

app.get("/reset", async (req, res) => {
  await Reservation.deleteMany({});

  return res.status(200).json({ msg: "shoudl be good" });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
