import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';



import { orderModel } from '../Models/ordermodel.js';
const orderRoute = express.Router();


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
    const ordersDoc = await orderModel.find()
    res.status(200).json(
  {ordersDoc}
      );   

} 
catch(err){   
res.status(400).json({error: 'errrrrrrrrrrror'})
}}
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) { 
      return res.sendStatus(401); 
    }                         
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token verification failed
      }
      req.message = "User authenticated successfully!";
      req.user = user;  
   console.log(user)
      next() ;  
      
    });}  

    export const authrole = (allowedRoles) => (req, res, next) => {  
        if (req.user && allowedRoles.includes(req.user.role)) {
            next(); // User has the required role, proceed to the next middleware
        } else {
            res.status(403).send('Forbidden'); // User does not have the required role
        }
    };

 
  
export const getmyorder= async (req, res) => {

    console.log(req.message); 
  
      try { 
        const userID = req.params.userId;
       
  const ordersDoc = await orderModel.find( {user: userID}).populate('product')
  console.log(ordersDoc)
        res.status(200).json({
        ordersDoc  
        });
      
      } catch (error) {
        res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        }); 
      }
  };  

orderRoute.post('/neworder',  authenticateToken, authrole(['user', 'admin']), addOrder);
orderRoute.get('/myorders/:userId', authenticateToken,authrole(['user', 'admin']), getmyorder); 

orderRoute.get('/',getorders);
    
export  default orderRoute; 
