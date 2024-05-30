
import { useReducer } from "react"
import { useMemo } from "react"
import ProductContext from "./productcontext"

const initialState={
    products:[],
    isloading: true
}
const productReducer= (state, action)=>{
   
    switch(action.type){
        case 'AllProductrequest':
   const products= action.payload
        return {products: products , isloading: false}
        default:
            return state
            
    }
 
}

const ProductProvider= (props)=>{
    const [productstate, dispatch ]= useReducer(productReducer, initialState)

const backendurl= process.env.REACT_APP_BACKEND_URL
  const fetchallproducts= async()=>{
    console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
    try {
      const res = await fetch(`${backendurl}/products`);
    
      if (!res.ok) {  
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const response = await res.json();
      console.log(response)
      dispatch({type: 'AllProductrequest', payload: response});
    } catch (error) {
     
      console.log('Fetch error: ', error);
    }}

const productContextValue = useMemo(() => ({
  products: productstate.products,
  fetchproducts: fetchallproducts,
  isloading: productstate.isloading
}), [productstate.products, productstate.isloading]);

return (
  <ProductContext.Provider value={productContextValue}>
    {props.children}
  </ProductContext.Provider>
);
};

export default ProductProvider
