let mongoose = require("mongoose");
mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    itemurl:String,
    itemtitle:String,
    itemdescription:String,
    itemprice:Number
});

productModel = mongoose.model("Groceries",productSchema);

module.exports=productModel;