import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


import route from './controllers/user.js';
import productRoute from './Routes/product.js';
import orderRoute from './Routes/order.js';
import dotenv from 'dotenv';


dotenv.config();



const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://abcelctonics-front.onrender.com', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));
// MongoDB connection
mongoose.connect('mongodb+srv://hudaalhadi:elc.eng18@ecommerce.a0l0yl8.mongodb.net/ecommerce', {
 
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/orders', orderRoute);
app.use('/user', route);
app.use('/products', productRoute);

// Start the server
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
