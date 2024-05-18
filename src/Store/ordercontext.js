import React from "react";

const OrderContext = React.createContext({


    orders: [],
    loading:true,
    order: {},
    getorders:()=>{ },
    getmyorder: (id)=>{}
  
})

export default OrderContext