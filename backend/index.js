const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/UserRouter");
const { productRouter } = require("./routes/ProductRouter");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("connection established");
        console.log("server listening on port 8080");
    } catch (error) {
        console.log(error);
    }
});
