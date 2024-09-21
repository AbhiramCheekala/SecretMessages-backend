// models/Item.js

const mongoose = require("mongoose");

// Define a schema for an Item
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Export the Mongoose model
module.exports = mongoose.model("Item", itemSchema);
