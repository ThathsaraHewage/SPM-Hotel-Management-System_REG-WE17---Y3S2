const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const venueBookingSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    // emailaddress: {
    //   type: String,
    //   required: true,
    // },
    venueName: {
      type: String,
      required: true,
    },
    occupancy: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    preferredDate: {
      type: String,
      required: true,
    },
    // additionalComment: {
    //   type: String,
    //   required: true,
    // },
    holdersname: {
      type: String,
      required: true,
    },
    cardnumber: {
      type: String,
      required: true,
    },
    cvv: {
      type: Number,
      required: true,
    },
    expdate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("venuebookings", venueBookingSchema);
