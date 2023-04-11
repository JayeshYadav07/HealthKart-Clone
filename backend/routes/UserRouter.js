const { UserModel } = require("../model/UserModel");
const { ProductModel } = require("../model/ProductModel");
const { authenticate } = require("../middleware/authenticate");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
require("dotenv").config();

userRouter.get("/", async (req, res) => {
    const user = await UserModel.find();
    res.send(user);
});

// Register user
userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await UserModel.find({ email });
    if (checkUser.length === 0) {
        bcrypt.hash(password, 5, async (error, hash) => {
            if (error) {
                res.send({ msg: "Something went wrong", error: error.message });
            } else {
                try {
                    const user = new UserModel({ name, email, password: hash });
                    await user.save();
                    res.send({ msg: "Signup Successful", user: user });
                } catch (error) {
                    res.send({
                        msg: "Something went wrong",
                        error: error.message,
                    });
                }
            }
        });
    } else {
        res.send({ msg: "User already exist, please login" });
    }
});

// user Login
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (error, result) => {
                if (result) {
                    const token = jwt.sign(
                        { userId: user._id },
                        process.env.tokenKey
                    );
                    console.log(token);
                    res.send({
                        msg: "User Successfully logged in",
                        token: token,
                        user: user,
                    });
                } else {
                    res.send({ error: error });
                }
            });
        } else {
            res.send({ msg: "Not able to login ! Please check" });
        }
    } catch (error) {
        res.send({ msg: "Something went wrong", error: error.message });
    }
});

//get all the users carts item
userRouter.get("/cart", authenticate, async (req, res) => {
    const userId = req.body.userId;
    try {
        const cart = await UserModel.findById(userId);
        res.send(cart.carts);
    } catch (error) {
        res.send({ error: error.message });
    }
});

//add that product to user carts => need product id
userRouter.get("/addToCart", authenticate, async (req, res) => {
    const productId = req.query.productId;
    const userId = req.body.userId;

    //if this product is already in cart then return error
    const isPresent = await UserModel.findOne({
        _id: userId,
        "carts.productId": productId,
    });
    if (isPresent) {
        res.send({ msg: "Product Already in cart!" });
    } else {
        const response = await ProductModel.findById(productId);
        const data = {
            productId: response._id,
            name: response.name,
            image: response.image,
            price: response.price,
            qty: 1,
            discount: response.discount,
            discountedPrice: response.discountedPrice,
        };
        const user = await UserModel.updateOne(
            { _id: userId },
            { $push: { carts: data } }
        );
        res.send({ msg: "Product Added to cart successfully" });
    }
});

//update the quantity
userRouter.put("/incrementQty/:productId", authenticate, async (req, res) => {
    const { userId } = req.body;
    const productId = req.params.productId;
    await UserModel.updateOne(
        { _id: userId, "carts._id": productId },
        { $inc: { "carts.$.qty": 1 } }
    );
    res.send({ msg: "Item Qty Updated" });
});

userRouter.put("/decrementQty/:productId", authenticate, async (req, res) => {
    const { userId } = req.body;
    const productId = req.params.productId;
    await UserModel.updateOne(
        { _id: userId, "carts._id": productId },
        { $inc: { "carts.$.qty": -1 } }
    );
    res.send({ msg: "Item Qty Updated" });
});

//delete the product from the cart
userRouter.delete("/deleteItem/:productId", authenticate, async (req, res) => {
    const productId = req.params.productId;
    const userId = req.body.userId;
    await UserModel.updateOne(
        {
            _id: userId,
        },
        { $pull: { carts: { _id: productId } } }
    );
    res.send({ msg: "Item Deleted" });
});

//empty your cart
userRouter.delete("/deleteAll", authenticate, async (req, res) => {
    const userId = req.body.userId;
    await UserModel.updateOne(
        {
            _id: userId,
        },
        { $set: { carts: [] } }
    );
    res.send({ msg: "All Item Deleted" });
});

module.exports = { userRouter };
