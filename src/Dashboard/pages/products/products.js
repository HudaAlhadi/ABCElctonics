
import React, { useState } from "react"
import './Products.css'
const Products=()=>{
    const[name, setname]= useState('')
const[price, setprice]= useState('')
const[desc, setdesc]= useState('')
const[image, setimage]= useState('')

const createproduct= async()=>{
try{ 
    const res= await fetch(`${backendURL}/products/Add`, {
        method: 'post',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({
title: name, 
price:price,
description: desc,
image:image
        })
        })

       
       } 
        
        catch(err){
            console.err(err)
        }

    }
  


    return <form  onSubmit={createproduct} >
     
                <h2>Add product</h2>
                <label  >Product title</label>
                <input onChange ={(e)=>{
                    setname(e.target.value)
                }} />
                <label >Price</label>
                <input onChange ={(e)=>{
                    setprice(e.target.value)}} name="password" required />
                <label >Product image</label>
                <input onChange ={(e)=>{
                    setimage(e.target.value)}}    />
                <label >Product Description</label>
                <input onChange ={(e)=>{
                    setdesc(e.target.value)}}   required  />
                <button> Add product </button>
            </form>
    
    
};



export default Products