require("dotenv").config();
const express = require("express");

const connect = require("./configs/db");
const authController = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const authenticate = require("./middlewares/authenticate.middleware");

let app = express();
app.use(express.json());

app.use("/auth", authController);
app.use("/users", userController);
app.use("/books", productController);
app.get("/", authenticate, (req, res) => {
  res.status(200).send("You are at home page");
})

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("Running on PORT: ", process.env.PORT);
  } catch (e) {
    console.log(e.message);
  }
});
