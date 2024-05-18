
import { orderModel } from "../Models/ordermodel.js";
import { usermodel } from "../Models/usermodel.js";
import { productModel } from "../Models/productmodel.js";
export const addOrder = async (req, res) => {
    try {
      const { username, productID, quantity } = req.body;
  
      // Retrieve the user based on the provided username
      const user = await usermodel.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Retrieve the product based on the provided productID
      const product = await productModel.findById(productID);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Create the order using the retrieved user, product, and other data
      const order = new orderModel({
        user: user._id,
        product: product._id,
        quantity,
        
       
      });
  
      // Save the order to the database
      const newOrder = await order.save();
  
      // Respond with the newly created order
      res.status(201).json({ order: newOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
// fetch orders

export const getorders=async(req,res)=>{
    try{
    const ordersDoc = await orderModel.find().populate('product')

    res.status(200).json({
   ordersDoc
      });
}
catch(err){
res.status(400).json({error: 'errrrrrrrrrrror'})
}}


export const getmyorder= async (req, res) => {
    try {
 
      const userID = req.params.userId;
console.log(userID)  
  

     
const ordersDoc = await orderModel.find({ user: userID}).populate('product')
       console.log(ordersDoc)
      res.status(200).json({
      ordersDoc
    
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
};
const fetchordersbycategory = async (req, res) => {
  try {
    
    const orders = await orderModel.find();




    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
