const express=require("express");
const app=express();
const cors = require('cors'); 2
const productController=require("./controllers/product.controller")


app.use(express.json())
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  }
  app.use(cors(corsOptions));
app.use("/products", productController);

module.exports=app;