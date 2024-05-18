
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/Cart-context';
import { HiMiniShoppingBag } from "react-icons/hi2";

import { useContext } from 'react';
const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button onClick={props.onClick} className={classes.button}>
            <HiMiniShoppingBag className={classes.icon} />
            
        
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
