
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderContext from "../../Store/ordercontext";
import { useContext, useEffect } from "react";
import './table.scss'
import Loading from "../../Components/UI/Card/Loading";

const List = () => {
const {orders, getorders, isLoading}= useContext(OrderContext)

console.log(orders)
  useEffect(()=>{
    getorders()
  },[])


  const rows = orders?.map((order)=>{ 
    return {id:order._id, user: order.user, product: order.product, quantity:order.quantity, date: order.createdAt}
  } )


 
  return (
<div className="transaction"> 
<h2> Latest transactions</h2>
    <TableContainer component={Paper} >
   {isLoading&& <Loading></Loading>}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row.id}>
             <TableCell className="tableCell">{row.img}</TableCell>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.quantity}</TableCell>
              <TableCell className="tableCell">  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default List;
 
