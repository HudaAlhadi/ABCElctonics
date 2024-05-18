
import { orderModel } from "../Models/ordermodel.js";
import { usermodel } from "../Models/usermodel.js";
import {  productModel } from "../Models/productmodel.js";



export const addOrder = async (req, res) => {
    try { 
      const { username, productID, quantity } = req.body;
      const user = await usermodel.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const product = await productModel.findById(productID);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      const order = new orderModel({
        user: user._id,
        product: product._id,
        quantity,
      });
  
      const newOrder = await order.save();
      res.status(201).json({ order: newOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


export const getorders=async(req,res)=>{
    try{
    const ordersDoc = await orderModel.find().populate('product')
    console.log(ordersDoc)
    res.status(200).json(
  {ordersDoc}
      );   

} 
catch(err){   
res.status(400).json({error: 'errrrrrrrrrrror'})
}}


export const getmyorder= async (req, res) => {

  console.log(req.message); 

    try { 
      const userID = req.params.userId;
const ordersDoc = await orderModel.find({ user: userID}).populate('product').populate('users')
      res.status(200).json({
      ordersDoc  
      });
    
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      }); 
    }
};  

 
export default route