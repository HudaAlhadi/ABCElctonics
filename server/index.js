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

// Initialize Stripe with the secret key from environment variable
const stripe = new Stripe(process.env.STRIPE_KEY);

// Initialize Express app
const app = express();

// Body parser middleware (included in Express)
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://abcelectonics-43364e8a49cb.herokuapp.com');
  next();
});
// Use cookie parser middleware
app.use(cookieParser());




// MongoDB connection
mongoose.connect('mongodb+srv://hudaalhadi:elc.eng18@ecommerce.a0l0yl8.mongodb.net/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/orders', orderRoute);
app.use('/user', route);
app.use('/products', productRoute);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
