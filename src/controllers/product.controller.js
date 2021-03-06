const path= require("path");
const express=require("express");
const Product=require("../models/product.model")
const router=express.Router();
//post the data
router.post("", async(req, res)=>{
    try {
        const product= await Product.create(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get the data
router.get("", async(req,res)=>{
    try {

      const page=+req.query.page || 1;
      const size=+req.query.size || 10;

      const skip= (page-1)*size;

      const products=await Product.find().skip(skip).limit(size).lean().exec();
      const totalPages= Math.ceil((await Product.find().countDocuments())/size);
      
        return res.status(200).send({products, totalPages}); 
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get data by id
router.get("/:id", async (req, res) => {
    try {
   
        const product = await Product.findById(req.params.id).lean().exec();
  
        return res.status(200).send({ products: product });

    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  //patch the data(means partially upadated not fully)
  router.patch("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          })
          .lean()
          .exec();
    
        return res.status(200).send(product);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

  //delete the data
  router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(product);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

module.exports=router;

//handle CRUD operation