const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const foodOrderSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
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

module.exports = mongoose.model("FoodOrder", foodOrderSchema);
