import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Mealtemdetail.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CartContext from '../../Store/Cart-context';
import ProductContext from '../../Store/productcontext';
import MealItem from './MealItem';
import Rating from '../UI/Rating/Rating';

const Mealtemdetail = (props) => {
  const [like, setLike] = useState(true);
  const { items, decreaseAmount, increaseAmount, addItem } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const params = useParams();

  const handleLike = () => {
    setLike((prev) => !prev);
  };

  const productItem = products?.find((item) => item.product.name === params.productId);

  const item = items?.find((item) => item.id === productItem.product._id);

  const filtereditems = products?.filter((item) => item.product._id !== productItem.product._id);
  const Filteredproducts= filtereditems?.map((item)=>{
    return <MealItem id={item.product._id} title={item.product.name} price={item.product.price} desc={item.product.description} img={item.product.images[0].url
    } rating={item.product.ratings} review={item.product.reviews} saleCount={item.product.saleCount}></MealItem>
    
    })

    console.log(Filteredproducts)
  const handleAdd = (id) => {
    increaseAmount(id);
  };

  const handleDecrease = (id) => {
    decreaseAmount(id);
  };

  const addToCart = (amount) => {
    addItem({
      id: productItem.product._id,
      title: productItem.product.name,
      price: productItem.product.price,
      description: productItem.product.description,
      amount: amount,
      img: productItem.product.image,
    });
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3},
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <img src={productItem?.product.images[0].url} alt={productItem?.product.name} />
        </div>
        <li className={classes.meal}>
          <div className={classes.container}>
            <div onClick={handleLike}>{like ? <FaRegHeart /> : <FaHeart />}</div>
            <h2>{productItem?.product.name}</h2>
            <Rating rating={productItem?.product.rating} />
            <h3 className={classes.details}>Details:</h3>
            <div className={classes.description}>{productItem?.product.description}</div>
            <div className={classes.price}>{productItem?.product.price} $</div>
            <div className={classes.quantities}>
              <h3>Quantity:</h3>
              <p className={classes.quantity}>
                <span onClick={() => handleDecrease(productItem?.product._id)} className={classes.minus}>
                  <AiOutlineMinus />
                </span>
                <span className={classes.ItemAmount}>{item?.amount || 0}</span>
                <span onClick={() => handleAdd(productItem?.product._id)} className={classes.plus}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className={classes.actions}>
              {item?.amount ? (
                <button className={classes.hide}>+ Add To Cart</button>
              ) : (
                <button className={classes.Add} onClick={() => addToCart(1)}>
                  + Add To Cart
                </button>
              )}
            </div>
          </div>
        </li>
      </div>
      <h2 className={classes.search}>Recently Searched</h2>
      <div className={classes.responsive}>
        <Carousel responsive={responsive}>{Filteredproducts}</Carousel>
      </div>
    </>
  );
};

export default Mealtemdetail;
