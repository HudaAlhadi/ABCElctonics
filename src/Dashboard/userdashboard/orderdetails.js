
import OrderContext from "../../Store/ordercontext"
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
const Orderdetails =()=>{
const {orderID}= useParams()
console.log(orderID)
    const {orders}= useContext(OrderContext)

   const order= orders?.ordersDoc?.filter((item)=>{
    return item._id===orderID
   })
   console.log(order)
   console.log(order[0].product)
    return <>

    <h1> Order details </h1>
    <div> 

    </div>
     </>
}

export default Orderdetails