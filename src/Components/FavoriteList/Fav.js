
import { useContext } from 'react';
import FavContext from '../../Store/Fav-context';
import ProductItem from '../ProductItem/ProductItem';
import { FaExclamation } from "react-icons/fa6";
import './Fav.css'
import React from 'react';


const Fav=()=>{
    const fav = useContext(FavContext)
const favoriteProducts= fav.items.map((item)=>{
    return    <ProductItem category={item.category} id={item.id} title={item.title} price={item.price} desc={item.description} img={item.img} rating={item.rating}></ProductItem>
})

    return (

        <>
     
        <h1> Favorite Products</h1>
        {favoriteProducts.length===0 &&<div className='fav-title'>  No Items <FaExclamation /></div> }
        <div className='Favorite'> 
        {favoriteProducts}
        </div>
        </>
    )
}

export default Fav