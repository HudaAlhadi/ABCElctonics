import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const orderSchema = new Schema({
   

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
   
            product: {
                type:Schema.Types.ObjectId,
                required: true,
                ref: 'product'
            },
            quantity: {
                type: Number,
                required: true
            },
   
    createdAt: {
        type: Date,
        default: Date.now
    }
 
})


export const orderModel= model('order', orderSchema)