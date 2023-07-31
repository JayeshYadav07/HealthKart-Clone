const { ProductModel } = require("../model/ProductModel");
const express = require("express");
const productRouter = express.Router();

productRouter.get("/createProduct", async (req, res) => {
  try {
    await ProductModel.insertMany({
      name: "String",
      price: 1,
      image: "String",
      rating: 1,
      reviews: 1,
      discount: 1,
      discountedPrice: 1,
      premiumPrice: 1,
    });
    res.send({ msg: "Product added successfully" });
  } catch (error) {
    res.send({ error: error.message });
  }
});
productRouter.get("/get/:count", async (req, res) => {
  try {
    let data = await ProductModel.find().limit(req.params.count);
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});
productRouter.get("/getLowToHigh/:count", async (req, res) => {
  try {
    let data = await ProductModel.find()
      .sort({ discountedPrice: 1 })
      .limit(req.params.count);
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});
productRouter.get("/getHighToLow/:count", async (req, res) => {
  try {
    let data = await ProductModel.find()
      .sort({ discountedPrice: -1 })
      .limit(req.params.count);
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});
productRouter.get("/getByid/:id", async (req, res) => {
  try {
    let data = await ProductModel.findById(req.params.id);
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = {
  productRouter,
};
