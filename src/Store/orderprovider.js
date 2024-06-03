


import { useReducer } from "react";

import OrderContext from "./ordercontext";
import { GiConsoleController } from "react-icons/gi";
const token= localStorage.getItem('token')
console.log(token)
const initialState = {
  orders: [],
  loading: true,
  order: {
    _id: '',
    cartId: '',
    products: [],
    total: 0,
    status: ''
  }

};

const orderreducer = (state, action) => {
  switch (action.type) {
    case 'All_orders_request':

    if(action.payload){ 
    
      return {
        ...state,
       orders: action.payload,
        loading: false

        
      };}

    case 'my_orders_request':
      const order= action.payload
      return {
        ...state, 
        loading: false,
        orders: order
      }

    }
};

  const OrderProvider = (props) => {
    const [orderState, dispatch] = useReducer(orderreducer, initialState);
  
   const getorders=async()=>{


        try{
            const res= await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`)
        
            const response= await res.json()
       const {orders}=response
            dispatch({type: 'All_orders_request', payload: orders})
     
            return response
             
        } catch(error){
            console.log(`${error} happened`)
        }
        }
        
        //get myorders
      const getmyorders=async(id)=>{
    
        try{
          const res= await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders/myorders/${id}`, {
            headers:{'Authorization':`Bearer ${token}`, 'content-type': 'application/json'}
         
          })
     
          const response= await res.json()
          console.log(response)
          dispatch({type: 'my_orders_request', payload: response})
     
          return response
       
      } catch(error){
          console.log(`${error} `)
      }
      }
        
     
        
        //make an order
        
        const makeOrder = async () => {
        }
        
        //cancel an order
        
        const cancelorder=async()=>{
        
        
        }
    const Context = {
       orders: orderState.orders,
        getorders:getorders,
        loading:orderState.loading,
        getmyorder: getmyorders,
   
      };


    return (
      <OrderContext.Provider value={Context}>
        {props.children}
      </OrderContext.Provider>
    );
    }
  
  export { OrderProvider};