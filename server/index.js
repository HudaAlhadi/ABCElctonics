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

// CORS configuration
const allowedOrigins = ['https://abcelectonics-43364e8a49cb.herokuapp.com', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Use cookie parser middleware
app.use(cookieParser());

// Body parser middleware (included in Express)
app.use(express.json());

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
