import React, { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle } from 'recharts';
import OrderContext from '../../Store/ordercontext';
import ProductContext from '../../Store/productcontext';
import './Barchart.css';

const StockChart = () => {
  const [orderData, setOrderData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const orders = useContext(OrderContext);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await orders.getorders();
      setOrderData(res);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Prepare data for the BarChart
  const stockData = products.map((order) => ({
    Stock: order.product.stock,
    Product: order.product.name.split(' ')[1],
  }));

  return (
    <div className='barchart'>
      <h2>Stock</h2>
      <BarChart
        width={400}
        height={300}
        data={stockData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Product' />
        <YAxis />
        <Tooltip />
        <Legend />
        
        {/* Bar representing 'Stock' with custom fill color */}
        <Bar dataKey='Stock' fill='#539ae6' />

        {/* Bar representing 'Product' with custom fill color */}
        <Bar dataKey='Product' fill='#8a2b06' />
      </BarChart>
    </div>
  );
};

export default StockChart;
