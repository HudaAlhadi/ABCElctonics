import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Stripe from 'stripe';
import cookieParser from 'cookie-parser';
import route from './controllers/user.js';
import productRoute from './Routes/product.js';
import orderRoute from './Routes/order.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Stripe with the secret key
const Stripe_Key = 'sk_test_....jQb';
const stripe = new Stripe(Stripe_Key);

// Initialize Express app
const app = express();

// Body parser middleware (included in Express)
app.use(express.json());

// Use cookie parser middleware
app.use(cookieParser());

// Enable CORS for all routes
app.use((req, res, next) => { res.header({"Access-Control-Allow-Origin": "*"}); next(); })
// MongoDB connection
mongoose.connect("mongodb+srv://hudaalhadi:elc.eng18@ecommerce.a0l0yl8.mongodb.net/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB  connection error:', err));

// Routes
app.use('/orders', orderRoute);
app.use('/user', route);
app.use('/products', productRoute);

// Function to insert products
const insertProducts = async () => {
  try {
    await productModel.insertMany(products);
    console.log('Products inserted successfully.');
  } catch (error) {
    console.error('Error inserting products:', error.message);
  }
};

// Function to insert overall stats
const insertstats = async () => {
  try {
    await OverallStat.insertMany(dataOverallStat);
    console.log('Overall stats inserted successfully.');
  } catch (error) {
    console.error('Error inserting overall stats:', error.message);
  }
};

// Function to insert users
const insertUsers = async () => {
  try {
    await usermodel.insertMany(usersData);
    console.log('Users inserted successfully.');
  } catch (error) {
    console.error('Error inserting users:', error.message);
  }
};

// Function to delete products
const deleteproducts = async () => {
  try {
    const result = await productModel.deleteMany({});
    console.log('Products deleted successfully.');
  } catch (error) {
    console.error('Error deleting products:', error.message);
  }
};

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
