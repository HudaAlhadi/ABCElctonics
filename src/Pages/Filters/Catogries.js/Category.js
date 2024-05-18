import ProductItem from '../../../Components/ProductItem/ProductItem.js';
import classes from './Category.module.css';
import React, { useState, useEffect, useContext } from 'react';
import shopping from '../../../Assets/org.png';
import { FaCamera } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { GiPowerRing } from 'react-icons/gi';
import { IoWomanOutline } from 'react-icons/io5';
import ProductFilter from '../ProductFilter.js';
import ProductContext from '../../../Store/productcontext.js';
import { useCallback} from 'react';
import Talktous from '../../../Components/UI/Card/Talktous.js';
import Loading from '../../../Components/UI/Card/Loading.js';


function Categories(props) {
  const { products, fetchproducts, isloading } = useContext(ProductContext);
  const [productlist, setProduct] = useState(products);
  // Memoize the products value
  const fetchProductsCallback = useCallback(fetchproducts, []);

  useEffect(() => {

    fetchProductsCallback();
  }, [fetchProductsCallback]);

  useEffect(() => {
    setProduct(products);
  }, [products]);



  const handlefilter = (e) => {
    const selectedCategory = e.target.value;

  
    const filteredItems = products.filter((item) => {
 
      return selectedCategory === 'All'  || item.product.category === selectedCategory
    });
    console.log(filteredItems)
    setProduct(filteredItems);
  };

  const allproducts = productlist?.map((item) => {
    return (
      <ProductItem
        key={item.product._id} 
        category={item.product.category}
        id={item.product._id}
        title={item.product.name}
        price={item.product.price}
        desc={item.product.description}
        img={item.product.images[0].url}
        rating={item.product.ratings}
        reviews={item.product.numOfReviews}
        saleCoubt={item.product.saleCount}
      />
    );
  });

  const updateFilteredProducts = (filteredProducts) => {
    setProduct(filteredProducts);
  };

  return (
    <>
    {isloading&&<Loading></Loading>}
    
      <div className={classes.shopping}>
        <h1>
          Summer <br />
          <span className={classes.red}>
            S<span>A</span>LE{' '}
          </span>
          <br /> Fine Up to 50% discount
        </h1>
        
        <img src={shopping} />
      </div>
      <div className={classes.wrapper}>
    <div className={classes.categories}> 
 
          <button className={classes.all} onClick={handlefilter} value={'All'}>
          <span>
              <IoWomanOutline />
            </span>
            All
          </button>
          <button className={classes.women} onClick={handlefilter} value={"Audio"}>
            <span>
              <IoWomanOutline />
            </span>
           Audio
          </button>
          <button className={classes.men} onClick={handlefilter} value={"Electronics"}>
            <span>
              <GiClothes />
            </span>
            Electronics
          </button>
          <button className={classes.electronics} onClick={handlefilter} value={'Accessories'}>
            <span>
              <FaCamera />
            </span>
            Accessories
          </button>
          <button className={classes.jewelery} onClick={handlefilter} value={'Cameras'}>
            <span>
              <GiPowerRing />
            </span>
            Cameras
          </button>
          <button className={classes.jewelery} onClick={handlefilter} value={'Laptops'}>
            <span>
              <GiPowerRing />
            </span>
            Laptops
          </button>
          </div>
        </div>
    
      <div className={classes.hero}>
        <div className={classes.filter}> 
      <ProductFilter onFilter={updateFilteredProducts} products={products}></ProductFilter></div>
      
      <div className={classes.meals}>
        {allproducts}
      </div> <Talktous></Talktous></div>
    </>
  );
}
export default Categories;
