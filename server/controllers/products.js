import { OverallStat } from "../Models/overallstats.js"
import { productModel } from "../Models/productmodel.js"
import mongoose from "mongoose"

export const fetchProducts= async(req,res)=>{
try{
    const products= await productModel.find()
    const productsstats= await Promise.all(products.map(async(product)=>{
        const stats= await OverallStat.findOne({productId:product._id.toString()})
        return {product, stats}
       }))
    res.status(200).json( productsstats)
    
} catch(err){
    console.log('Error fetching products:', err.message)
}       
}


export const addproduct= async(req,res)=>{
    try{ 
const{title, price, description, image}= req.body
console.log(title, price, description, image)
const newProduct=  new productModel({name: title, description: description, price:price, image: image})
await newProduct.save()
res.json({message: "Product added !"})}
catch(err){ 
    console.log(err)
}
}
