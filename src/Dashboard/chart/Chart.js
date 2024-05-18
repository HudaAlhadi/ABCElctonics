import { useContext } from "react";
import "./chart.scss";
import { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import ProductContext from "../../Store/productcontext";


const Chart = () => {
  const { fetchproducts , products} = useContext(ProductContext);
  console.log(products)
useEffect(()=>{
  fetchproducts()
},[])

const stats = products.map(({ stats }) => {

  return stats?.monthlyData;
});

console.log(stats)

  return (
<> 
    
  <div className="hero"> 

  <h2 className="sales"> Total sales</h2>
        <AreaChart
          width={500}
          height={250}
           data={stats[0]}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className="chart">
                    <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
<YAxis  dataKey="totalSales"/>
          
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
       
            dataKey="totalSales" 
            stroke="#8a2b06"
            fillOpacity={1}
            fill="url(#total)"
    
   
          />
        </AreaChart>
        </div>
      </>
  );
};

export default Chart;