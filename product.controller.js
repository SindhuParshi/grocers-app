let productModel = require("../model/product.model");

let storeProduct = (req,res)=> {
    let product = req.body;
    console.log(product);
    productModel.insertMany(product,(err,result)=> {
        if(!err){
            res.json({"msg":"Record stored successfully"})
        }else {
            res.json({"msg":"Record didn't store"});
        }
    })
}

let retrieveProduct = (req,res)=> {
    productModel.find({},(err,doc)=> {
        if(!err){
            res.json(doc);
        }else {
            res.json({"msg":"Error generated"})
        }
    })
}

let updateProduct = (req,res)=> {
    let product = req.body;
    productModel.updateMany({_id:product._id},{$set:{price:product.price}},(err,result)=> {
        if(!err){
            if(result.modifiedCount>0){
                res.json({"msg":"Record updated Successfully"})
            }else {
                res.json({"msg":"Record didn't upload successfully"})
            }
        }else {
            res.json({"msg":"Error generated"})
        }
    })
}

let deleteProduct = (req,res)=> {
    let pid = req.params._id;
    console.log(pid);
    productModel.deleteMany({_id:pid},(err,result)=> {
        if(!err){
            if(result.deletedCount>0){
                res.json({"msg":"Record deleted Successfully"})
            }else {
                res.json({"msg":"Record didn't delete"})
            }
        }else {
            res.json({"msg":"Error generated"})
        }
    })
}
// exports.model={storeProduct}
module.exports={storeProduct,retrieveProduct,updateProduct,deleteProduct}