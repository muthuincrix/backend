const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cart: [
    {
      url: {
        type: String,
        required: true,
      },
      product_name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
        enum: ["$", "₹"],
      },
      reviews: {
        type: String,
      },
      rating: {
        type: Number,
      },
      tag: {
        type: Boolean,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", Schema);
