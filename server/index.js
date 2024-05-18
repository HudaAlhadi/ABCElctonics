import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Stripe from 'stripe';
import cookieParser from 'cookie-parser';
import route from './controllers/user.js';
import productRoute from './Routes/product.js';
import { usermodel } from './Models/usermodel.js';
import { productModel } from './Models/productmodel.js';
import { products } from './data/productts.js';
import {OverallStat} from './Models/overallstats.js';
import { usersData } from './data/usersdata.js';
import { dataOverallStat } from './data/overallstats.js';
import orderRoute from './Routes/order.js';
import dotenv from 'dotenv';
const Stripe_Key = 'sk_test_....jQb';
const stripe = new Stripe(Stripe_Key);
const app = express(); 
dotenv.config();
// Body parser middleware (included in Express)
app.use(express.json());

app.use(cookieParser());
app.use(cors({
   origin: 'http://localhost:3000' // Allow requests from this origin
   }));
   app.use('/orders', orderRoute)
app.use('/user', route)  
//app.use('/payment', route)  
app.use('/products', productRoute)  

 


const insertProducts = async () => {
  try { 
    await productModel.insertMany(products);
    console.log('Products inserted successfully.');
  } catch (error) {  
    console.error( 'Error  inserting products:', error.message);
  }   
};  

const insertstats= async()=>{
try{
  await OverallStat.insertMany(dataOverallStat)
  console.log('Products inserted successfully.');} catch(error){
    console.error('errorrrrrrr')
  }
}


const insertUsers = async () => {
  try {
      await usermodel.insertMany(usersData);
      console.log('Users inserted successfully');
  } catch (error) {
      console.error('Error inserting users:', error);
  }
};

const deleteproducts= async()=>{
try{ 
  const result = await productModel.deleteMany({});

console.log('Products deleted ')} catch(error){
  console.error('Error')
}
}


// Connect to MongoDB
mongoose.connect("mongodb+srv://hudaalhadi:elc.eng18@ecommerce.a0l0yl8.mongodb.net/ecommerce");

// Start the server
const port = 3005; 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
