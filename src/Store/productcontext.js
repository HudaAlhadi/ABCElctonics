import React from "react";

const ProductContext = React.createContext({


   products: [],
   fetchproducts :async() => { },
   isloading:true
  
})

export default ProductContext