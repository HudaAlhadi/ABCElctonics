import { BsDashSquare } from "react-icons/bs";
import  './CartItem.css'
const CartItem=(props)=>{


    return <>
             
            <div className="container">   
        <div className='leftsec'>
            <img src={props.img}/>
            </div>
        <div className="right-sec">
            <h3>{props.title}</h3>
            <div className="title"> 
            <div className="number"> 
            <div className="num"> 
            <span  className='decrease'  onClick={props.onDecrease}> -</span>
      
            <p className="amount">{props.amount} </p>
            <span  className='increase' onClick={props.onAdd}> +</span>
            </div>
            <span className="remove" onClick={props.onRemove}> Remove</span>
            </div>
    
            <p className="price"> {props.price} $</p>
            </div>   
        </div>
        </div>
    </>
}

export default CartItem