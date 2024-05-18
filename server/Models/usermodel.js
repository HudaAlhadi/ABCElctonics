
import { Schema, model } from   "mongoose";        
                                                            
const userschema= new Schema({ 
    username:{ type: String ,required: true,
        unique: true},
     password:    {type: String,
     required: true},
     email: {type: String, required: true},
     role: {type: String, required:true}
     })                                                                       


export const usermodel= model('users', userschema)
