const express = require("express");
const authenticate = require("../middlewares/authenticate.middleware");
const authorise = require("../middlewares/authorise.middleware");

const Product = require("../models/product.model");

const router = express.Router();

router.post("", authenticate, async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      user_id: req.user._id,
    });

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Product.find();

    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id",  async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);

    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id",   async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
