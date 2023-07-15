import { useContext } from "react";
import classes from './CartItem.module.css';
import CartContext from "../../../Store/Cart-context";

const CartItem = (props) => {

    return (
        <div class={classes.container1}>
            <li className={classes['cart-item']}>
                <div>
                    <h3>{props.name}</h3>

                    <div className={classes.summary}>
                        <span className={classes.price}>{props.price}</span>
                        <span className={classes.amount}>x {props.amount}</span>
                    </div>
                </div>
                <div className={classes.actions}>
                    <button onClick={props.onRemove}>−</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
            </li >
        </div>
    )
}

export default CartItem