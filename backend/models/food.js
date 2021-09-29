const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const foodSchema = new mongoose.Schema(
  {
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
    status: {
      type: String,
      default: "available",
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FoodItems", foodSchema);
