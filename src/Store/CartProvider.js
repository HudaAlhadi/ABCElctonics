import CartContext from "./Cart-context";
import React, { useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const existingItem = state.items.find((item) => item.id === action.item.id);
      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.id === action.item.id
              ? { ...item, amount: item.amount + action.item.amount }
              : item
          )
        : state.items.concat(action.item);

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount
      };

    case 'remove':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id)
      };

    case 'increase':
      const increasedItems = state.items.map((item) =>
        item.id === action.id ? { ...item, amount: item.amount + 1 } : item
      );

      return {
        ...state,
        items: increasedItems
      };

    case 'decrease':
      const decreasedItems = state.items.map((item) =>
        item.id === action.id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );

      return {
        ...state,
        items: decreasedItems
      };

    default:
      return state;
  }
};
const CartProvider = (props) => {
  const [itemState, dispatch] = useReducer(reducer, initialState);

  const increase = (id) => {
    dispatch({ type: 'increase', id: id });
  };

  const decrease = (id) => {
    dispatch({ type: 'decrease', id: id });
  };

  const addItem = (item) => {
    dispatch({ type: 'add', item: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'remove', id: id });
  };

  const cartContext = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    increaseAmount: increase,
    decreaseAmount: decrease,

  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;