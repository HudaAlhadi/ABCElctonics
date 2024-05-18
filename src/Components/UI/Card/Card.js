import classes from './Card.module.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'

import {MdFavoriteBorder} from 'react-icons/md'
import {MdFavorite} from 'react-icons/md'
import { useContext, useState } from 'react';
import FavContext from '../../../Store/Fav-context';

const Card = (props) => {
     const [cart, setcart]= useState(1)
     const[fav, setfav] = useState(false)

const ctx= useContext(FavContext)

     const Handle = (e) => {
        e.preventDefault()
    setcart(1)
        props.onAdd(cart)
      };
const HandleFav=()=>{
        setfav((fav)=> !fav)
        props.onFav()
}
      

    return <div className={classes.card}>
          <div className={classes.container}> 
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
          <GrAdd onClick={Handle} ></GrAdd>
         <div onClick={HandleFav}>{ fav?<MdFavorite /> : <MdFavoriteBorder />}</div>
          </div>
          {props.children}
          </div>
};

export default Card;