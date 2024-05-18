import classes from './Cartt.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../Store/Cart-context';
import { Link} from 'react-router-dom';
import CartItem from '../MealItem/cartItem';
import { FaShoppingCart } from "react-icons/fa";
const Cartt = (props) => {

    const ctx = useContext(CartContext)

    const totalamount = ctx.items.reduce((currentNu, item) => {
        return currentNu + (item.amount * item.price)
    }, 0)
    const total = `$${totalamount.toFixed(2)}`
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);

    };
const cartDecreaseHandler=(id)=>{
    ctx.decreaseAmount(id)
}
    const cartItemAddHandler = ( id) => {
        ctx.increaseAmount (id)
     };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {ctx.items.map((item) => (
                <CartItem
                
                    key={item.id}
                    img={item.img}
                    id={item.id}
                    title={item.title}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null,item.id)}
                    onDecrease={cartDecreaseHandler.bind(null, item.id)}   
                />
            ))}
        </ul>
    );
    return (
        <Modal onHide={props.onHide}>
        
            <h2> Shopping bag</h2>
            {ctx.items.length===0?<FaShoppingCart className={classes.shopping}/>: ''}
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHide} className={classes['button--alt']}>Close</button>
               <Link to='./checkout'> <button className={classes.button}>Order</button></Link> 
            </div>
        </Modal>
    );
};

export default Cartt;