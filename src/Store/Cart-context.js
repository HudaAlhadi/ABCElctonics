import React from "react";

const CartContext = React.createContext({


    items: [],
    totalamount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    increaseAmount:(id)=>{},
    decreaseAmount:(id)=>{}
})

export default CartContext