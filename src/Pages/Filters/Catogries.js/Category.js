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
  const [productlist, setProduct] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  
  const fetchProductsCallback = useCallback(fetchproducts, []);

  useEffect(() => {
    fetchProductsCallback();
  }, [fetchProductsCallback]);

  useEffect(() => {
    setProduct(products);
    setSortedProducts(products);  
  }, [products]);

  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    const filteredItems = products.filter((item) => selectedCategory === 'All' || item.product.category === selectedCategory);
    setSortedProducts(filteredItems);
  };

  const handleSort = (sortedProducts) => {
    setSortedProducts([...sortedProducts]);
  };

  const allproducts = sortedProducts.map((item) => (
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
  ));

  return (
    <>
      {isloading && <Loading />}
      <div className={classes.shopping}>
        <h1>
          Summer <br />
          <span className={classes.red}>
            S<span>A</span>LE{' '}
          </span>
          <br /> Fine Up to 50% discount
        </h1>
        <img src={shopping} alt="shopping" />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.categories}>
          <button className={classes.all} onClick={handleFilter} value={'All'}>
            <span>
              <IoWomanOutline />
            </span>
            All
          </button>
          <button className={classes.women} onClick={handleFilter} value={"Audio"}>
            <span>
              <IoWomanOutline />
            </span>
            Audio
          </button>
          <button className={classes.men} onClick={handleFilter} value={"Electronics"}>
            <span>
              <GiClothes />
            </span>
            Electronics
          </button>
          <button className={classes.electronics} onClick={handleFilter} value={'Accessories'}>
            <span>
              <FaCamera />
            </span>
            Accessories
          </button>
          <button className={classes.jewelery} onClick={handleFilter} value={'Cameras'}>
            <span>
              <GiPowerRing />
            </span>
            Cameras
          </button>
          <button className={classes.jewelery} onClick={handleFilter} value={'Laptops'}>
            <span>
              <GiPowerRing />
            </span>
            Laptops
          </button>
        </div>
      </div>
      <div className={classes.hero}>
        <div className={classes.filter}>
          <ProductFilter onFilter={handleSort} products={productlist} />
        </div>
        <div className={classes.meals}>
          {allproducts}
        </div>
        <Talktous />
      </div>
    </>
  );
}

export default Categories;