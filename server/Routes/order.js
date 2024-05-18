import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { orderModel } from '../Models/ordermodel.js';

const orderRoute = express.Router();

// Middleware for token authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401); // No token provided
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Token verification failed
    }
    req.user = user;
    console.log(user);
    next();
  });
};

// Middleware for role-based authorization
const authrole = (allowedRoles) => (req, res, next) => {
  if (req.user && allowedRoles.includes(req.user.role)) {
    next(); // User has the required role, proceed to the next middleware
  } else {
    res.status(403).send('Forbidden'); // User does not have the required role
  }
};

// Handler for adding a new order
const addOrder = async (req, res) => {
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

// Handler for getting all orders
const getOrders = async (req, res) => {
  try {
    const ordersDoc = await orderModel.find();
    res.status(200).json({ orders: ordersDoc });
  } catch (err) {
    res.status(400).json({ error: 'Error fetching orders' });
  }
};

// Handler for getting orders of a specific user
const getMyOrder = async (req, res) => {
  try {
    const userID = req.params.userId;
    const ordersDoc = await orderModel.find({ user: userID }).populate('product');
    res.status(200).json({ orders: ordersDoc });
  } catch (error) {
    res.status(400).json({ error: 'Your request could not be processed. Please try again.' });
  }
};

// Define routes
orderRoute.post('/neworder', authenticateToken, authrole(['user', 'admin']), addOrder);
orderRoute.get('/myorders/:userId', authenticateToken, authrole(['user', 'admin']), getMyOrder);
orderRoute.get('/', getOrders);

export default orderRoute;
