import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { addproduct } from '../controllers/products.js';
import { authrole } from '../middlewares/Auth.js';
import {fetchProducts} from '../controllers/products.js'
import { authenticateToken } from '../middlewares/Auth.js';

const productRoute = express.Router();


productRoute.get('/', fetchProducts);
productRoute.post('/Add', authenticateToken, authrole(['admin']),addproduct );
 
export default productRoute; 
 