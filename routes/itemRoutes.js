// routes/itemRoutes.js

const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

// CREATE: Add a new item
router.post("/items", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newItem = new Item({ name, price, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating item", error: err.message });
  }
});

// READ: Get all items
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching items", error: err.message });
  }
});

// READ: Get a single item by ID
router.get("/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching item", error: err.message });
  }
});

// UPDATE: Update an item by ID
router.put("/items/:id", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, price, description },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating item", error: err.message });
  }
});

// DELETE: Delete an item by ID
router.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting item", error: err.message });
  }
});

module.exports = router;
