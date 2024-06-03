import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { dataOverallStat } from './data/overallstats.js';
import { OverallStat } from './Models/overallstats.js';
import route from './controllers/user.js';
import productRoute from './Routes/product.js';
import orderRoute from './Routes/order.js';
import dotenv from 'dotenv';


dotenv.config();



const app = express();

app.use(express.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});
app.use(cors());
// MongoDB connection

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hudaalhadi:elc.eng18@ecommerce.a0l0yl8.mongodb.net/ecommerce')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));
// Routes
app.use('/orders', orderRoute);
app.use('/user', route);
app.use('/products', productRoute);
  
const insertstats=async ()=>{
  try{ 
await OverallStat.insertMany(dataOverallStat)
console.log("stats insereted")}
catch(err){
  console.log(err )
}
}

// Start the server
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
