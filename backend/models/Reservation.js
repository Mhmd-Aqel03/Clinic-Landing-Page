const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time:{
    type: Number,
    required:true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("clinic-cluster", ReservationSchema)