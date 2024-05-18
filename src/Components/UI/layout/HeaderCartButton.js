
import classes from './HeaderCartButton.module.css';
import * as React from 'react';
import CartContext from '../../Store/Cart-context';
import CartIcon from './CartIcon';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    console.log(cartCtx)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    
    return (


        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>


    );
};

export default HeaderCartButton;
