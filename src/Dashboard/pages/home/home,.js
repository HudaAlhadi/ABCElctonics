import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import React, { useEffect, useState } from 'react';
import Chart from "../../chart/Chart";
import List from "../../table/Table";
import Grid from '@mui/material/Grid';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { getorders } from "../../../Actions/orderactions";
import { useDispatch } from "react-redux";
import { TfiStatsDown } from "react-icons/tfi";
import './home.css'
import { BiStats } from "react-icons/bi";
import { IoStatsChartOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { useContext } from "react";
import ProductContext from "../../../Store/productcontext";
import UserContext from "../../../Store/usercontext";
import { setupListeners } from "@reduxjs/toolkit/query";
import OrderContext from "../../../Store/ordercontext";
import StockChart from "../../chart/Barchart";
import Loading from "../../../Components/UI/Card/Loading";

const Home = () => {
  
  const{orders, getorders,loading}= useContext(OrderContext)
  const {products}= useContext(ProductContext)



  useEffect(()=>{
 getorders()
  } ,[])


    const {fetchUsers, users}= useContext(UserContext)
    useEffect(()=>{
    fetchUsers()
    },[])              

 
 const stock= products.filter((item)=>{
    return item.product.stock<50
    })

const totalstock= products?.reduce((acc, item)=>{
return acc+ item.product.stock
}, 0)

  return (
    <> 
     <Grid container className="home" >
      {loading&& <Loading> </Loading>}
      
      <Grid item xs={12}>
  
      </Grid>
      <Grid item xs={2}>
      <Sidebar/>
      </Grid>
      <Grid item xs={10}>
      <div className="dashboard"> Dashboard</div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
        <div className="section"> 
        <div className="product"> 
        <div>
        <h2>Out of stock</h2>
        <span>{stock.length}</span>
        </div>
       <TfiStatsUp className="icon" />
        </div>
        <div className=" total product">
        <div>
        <h2> Total Products </h2>
        <span> {products.length}</span>
        </div>
        <IoStatsChartOutline className="icon"/>
        </div>
        <div className=" user  product">
        <div>
        <h2> Total Users </h2>
        <span> {users.length}</span>
        </div>
        <BiStats className="icon" />
        </div>
        <div className=" user product">
        <div>
        <h2> Products in Stock  </h2>
        <span> {totalstock}</span>
        </div>
        <TfiStatsDown className="icon"/>
        </div>
        </div>
        <div className="Chart"> 
        <Chart  className="revnueChart" title="Last 6 Months (Revenue)" aspect={2/1} />
        <StockChart className="icon"/>
        </div>
         </Grid>
         
          <Grid item xs={12}>
            <div className="listContainer">
           
            <List />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid></>
  );
};

export default Home;
