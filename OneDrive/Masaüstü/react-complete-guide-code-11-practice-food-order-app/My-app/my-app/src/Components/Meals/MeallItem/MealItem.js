import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm'
import Card from '../../UI/Card/Card';
import { useContext } from 'react';

import CartContext from '../../../Store/Cart-context';


const MealItemm = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const ctx = useContext(CartContext)


    const Addfunction = (amount) => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            desc: props.description,
            amount: amount


        })

    }


    return (

        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={Addfunction}> </MealItemForm></div>


        </li >

    );
};

export default MealItemm;  