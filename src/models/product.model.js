const mongoose=require("mongoose");
const productSchema=new mongoose.Schema(
    {
        name: { type: String, require: true },
        symbol: { type: String, require: true },
        current_price: { type: Number, require: true },
        market_cap_rank: { type: Number, require: true },
        total_volume: { type: Number, require: true },
        total_supply: { type: Number, require: true },
        image: { type: String, require: true },  
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
module.exports= mongoose.model("product", productSchema);