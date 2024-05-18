import express from 'express';
import { usermodel } from '../Models/usermodel.js';
import jwt from 'jsonwebtoken';

const route= express.Router()
route.use(express.json());
 
route.post('/register', async(req,res)=>{
    const{username, password, email}= req.body
    console.log(username, password)
    const user= await usermodel.findOne({username})
    try{ 
        if(user){
return res.status(400).json({message: "user already exists"})
        } 
        
const newuser= new usermodel({username: username, password: password, role: "user", email:email})
const registereduser= await newuser.save()
res.json({message: "user created !!!!!!"})
    }
catch(err){ 
return res.status(404).json({message: "error happened"})
} 
})
 


route.post('/login',  async (req, res)=>{
    const {email, password}= req.body
console.log(password, email)
    try{
        const user= await usermodel.findOne({email})    
        if(!user){
return res.status(400).json({message: "user not found "})
        }
        if(password=== user.password){
          const maxAge = 1000 * 1000
   
            const accesstoken= jwt.sign({password:password, email:email, username: user.username, id: user._id, role: user.role}, process.env.ACCESS_TOKEN_SECRET)
           return  res.status(200).json({ user, accesstoken })  
        }
      else  return  res.status(400).json({ message: "error happened"})
    } 
    catch(err){
        res.json.status(400)({ message: "error happened"})
        return
    }
})
route.get('/getusers',  async (req, res)=>{
    try{ 
const users= await usermodel.find()

res.json({users})
    }
    catch(err){
        res.status(400).json({message: 'error'})
    }
})
 
export default route