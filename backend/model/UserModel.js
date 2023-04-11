const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: {
            unique: true,
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        carts: [
            {
                productId: { type: String },
                name: { type: String, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                qty: { type: Number, required: true },
                discount: Number,
                discountedPrice: Number,
            },
        ],
    },
    {
        versionKey: false,
    }
);
const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel,
};
