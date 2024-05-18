
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


  const fetchallproducts= async()=>{
   try{
     const res= await fetch('http://localhost:3005/products/')
 
    if(res.status===200){  
      const response= await res.json()
      dispatch({type: 'AllProductrequest', payload:response})
        }}
        catch(error){
    console.log(error)
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
