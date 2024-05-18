

import FavContext from "./Fav-context";
import { useReducer } from "react";


const initialState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const existingItem = state.items.find((item) => item.id === action.item.id);
      const updatedItemsAdd = existingItem
        ? state.items.map((item) =>
            item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
          )
        : state.items.concat(action.item);

      return {
        items: updatedItemsAdd,
      };

    case 'remove':
      const updatedItemsRemove = state.items.filter((item) => item.id !== action.id);
      return {
        ...state,
        items: updatedItemsRemove,
      };

    default:
      return state;
  }
};

  const FavProvider = (props) => {
    const [itemState, dispatch] = useReducer(reducer, initialState);
  
   
    const addItem = (item) => {
      dispatch({ type: 'add', item: item });
    };
  
    const removeItem = (id) => {
      dispatch({ type: 'remove', id: id });
    };
  
   
    const favContext = {
        items: itemState.items,
        addItem: addItem,
        removeItem: removeItem,
      };


    return (
      <FavContext.Provider value={favContext}>
        {props.children}
      </FavContext.Provider>
    );
  };
  
  export { FavProvider};