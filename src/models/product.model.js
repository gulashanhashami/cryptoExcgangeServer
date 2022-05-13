const mongoose=require("mongoose");
const productSchema=new mongoose.Schema(
    {
        name: { type: String, require: true },
        data_symbols_count: { type: Number, require: true },
        data_start: { type: String, require: true },
        data_end: { type: String, require: true },
        volume_1hrs_usd: { type: Number, require: true },
        volume_1day_usd: { type: Number, require: true },
        volume_1mth_usd: { type: Number, require: true },
        url: { type: String, require: true },  
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
module.exports= mongoose.model("product", productSchema);

//products Schema