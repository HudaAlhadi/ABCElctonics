import classes from './ProductItem.module.css';
import Card from '../UI/Card/Card.js';
import { useContext } from 'react';
import CartContext from '../../Store/Cart-context.js';
import {Link } from 'react-router-dom';
import FavContext from '../../Store/Fav-context.js';
import { FaRegStar } from "react-icons/fa";
import Rating from '../UI/Rating/Rating.js';

const ProductItem = (props) => {

    const cart= useContext(CartContext);
   const fav= useContext(FavContext)
   
  const Addfunction = (amount) => {
       cart.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            description: props.desc,
            amount: amount,
            img:props.img,
        });
    }
    const AddFav=()=>{
       fav.addItem({
        id: props._id,
            title: props.title,
            price: props.price,
            description: props.desc,
            img:props.img,
            saleCount: props.saleCount,
            rating:props.rating
        })
      }

           return (
        <Card onFav= {AddFav} onAdd={Addfunction}>
             <div className={classes.meal}>
                    <div> 
                    <img src={props.img} alt={props.name} /></div>
                    <h3>{props.title}</h3>  
                    <div className={classes.price}>{props.price}$</div>
                <Link to={`/meals/${props.title}`}>
                <span className={classes.reviews}> Reviews: {props.reviews}</span>
                    <Rating rating={props.rating}/> 
                        <button className={classes.button}>View details</button>
                    </Link></div>
        </Card>
    );
  };

export default ProductItem;
