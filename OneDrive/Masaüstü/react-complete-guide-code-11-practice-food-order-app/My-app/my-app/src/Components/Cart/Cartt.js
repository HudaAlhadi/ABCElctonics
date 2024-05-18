import classes from './Cartt.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../Store/Cart-context';
import CartItem from '../Meals/MeallItem/CartItem';
const Cartt = (props) => {

    const ctx = useContext(CartContext)
    const totalamount = ctx.items.reduce((currentNu, item) => {
        return currentNu + (item.amount * item.price)
    }, 0)
    const total = `$${totalamount.toFixed(2)}`

    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);

    };

    const cartItemAddHandler = (item) => { };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {ctx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );


    return (
        <Modal onHide={props.onHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHide} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cartt;