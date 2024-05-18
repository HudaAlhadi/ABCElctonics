

import OrderContext from "../../Store/ordercontext";
import { useContext, useEffect } from "react";
import './order.css'
import AuthContext from "../../Store/authcontext";
import { OrderProvider } from "../../Store/orderprovider";
import { GiConsoleController } from "react-icons/gi";
import { Link } from "react-router-dom";
const Orders= ({users})=>{
const{getmyorder,orders}= useContext(OrderContext)
const ctrx= useContext(OrderContext)
console.log(ctrx)

console.log(orders)

    useEffect(()=>{
getmyorder(users.id)
    },[users.id])


    const ordersavailable= orders?.ordersDoc?.length>0
    return (
        <>
          <h2>Your recent orders</h2>
          <div className="order-container">
          {ordersavailable ? (
          orders.ordersDoc.map((item) => (
            <Link to={`/account/myorders/${item._id}`}>
              <div className='orders' key={item._id}>
                <p> <span className="headers">Order Date:</span>{item. createdAt}</p>
              
                    
                  <p><span className="headers"> Order ID:</span> {item._id}</p>
               
              
                   <p><span className="headers">Product:</span> {item.product.name} {item.product.quantity}</p> 
                 
                  <p><span className="headers">Quantity:</span> {item.quantity}</p>
                  <span> Total <br/> {item.product.price*item.quantity} $</span> 
               
              </div> </Link>
            ))
          ) : (
            <p>You have No orders</p>
          )}
           </div>
        </>
      );
    };
    
export default Orders