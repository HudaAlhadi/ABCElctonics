
import CartContext from "./Cart-context"

import { useReducer } from "react"
const CartProvider = (props) => {

    const intialstate = {

        items: [],
        totalAmount: 0
    }

    const reducer = (state, action) => {
        if (action.type === 'add') {

            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        };
        if (action.type === 'remove') {

            return {
                ...state, items: state.items.filter((cd) => cd.id !== action.id)
            }
        }
        return intialstate
    }
    const initial = {
        Instock: false,
        befast: false,
        byrating: 0
    }
    const cartReducer = (state, action) => {


    }
    const [itemState, dispatch] = useReducer(reducer, intialstate)
    const [Cartreducer, Productdispatch] = useReducer(cartReducer, initial)


    const addittemss = (item) => {

        dispatch({ type: 'add', item: item })
    }


    const removeitemss = (id) => {
        dispatch({ type: 'remove', id: id })
    }

    const cartContext = {
        items: itemState.items,
        totalAmount: itemState.totalAmount,
        addItem: addittemss,
        removeItem: removeitemss,
    };
    return (<CartContext.Provider value={cartContext}>

        {props.children}
    </CartContext.Provider>


    )
}
export default CartProvider