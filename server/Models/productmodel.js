import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ratings: {
    type: Number,
 
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    
  },
  seller: {
    type: String,
  
  },
  stock: {
    type: Number,
    
  },
  numOfReviews: {
    type: Number,
    
  },
  reviews: [String],

  saleCount: {
    type: Number,
    default: 0 // Default discount is 0
  }
});

export const productModel = model('product', productSchema);
