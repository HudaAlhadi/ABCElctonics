import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductItemdetail.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CartContext from '../../Store/Cart-context';
import ProductContext from '../../Store/productcontext';
import ProductItem from './ProductItem';
import Rating from '../UI/Rating/Rating';

const ProductItemDetail = () => {
  const [isLiked, setIsLiked] = useState(true);
  const { items, decreaseAmount, increaseAmount, addItem } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { productId } = useParams();

  const toggleLike = () => {
    setIsLiked(prev => !prev);
  };

  const product = products?.find(item => item.product.name === productId);
  const cartItem = items?.find(item => item.id === product.product._id);

  const relatedProducts = products?.filter(item => item.product._id !== product.product._id);
  const relatedProductItems = relatedProducts?.map(item => (
    <ProductItem
      key={item.product._id}
      id={item.product._id}
      title={item.product.name}
      price={item.product.price}
      desc={item.product.description}
      img={item.product.images[0].url}
      rating={item.product.ratings}
      review={item.product.reviews}
      saleCount={item.product.saleCount}
    />
  ));

  const handleAdd = id => {
    increaseAmount(id);
  };

  const handleDecrease = id => {
    decreaseAmount(id);
  };

  const handleAddToCart = amount => {
    addItem({
      id: product.product._id,
      title: product.product.name,
      price: product.product.price,
      description: product.product.description,
      amount: amount,
      img: product.product.image,
    });
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <img src={product?.product.images[0].url} alt={product?.product.name} />
        </div>
        <li className={classes.meal}>
          <div className={classes.container}>
            <div onClick={toggleLike}>
              {isLiked ? <FaRegHeart /> : <FaHeart />}
            </div>
            <h2>{product?.product.name}</h2>
            <Rating rating={product?.product.rating} />
            <h3 className={classes.details}>Details:</h3>
            <div className={classes.description}>{product?.product.description}</div>
            <div className={classes.price}>{product?.product.price} $</div>
            <div className={classes.quantities}>
              <h3>Quantity:</h3>
              <p className={classes.quantity}>
                <span onClick={() => handleDecrease(product?.product._id)} className={classes.minus}>
                  <AiOutlineMinus />
                </span>
                <span className={classes.ItemAmount}>{cartItem?.amount || 0}</span>
                <span onClick={() => handleAdd(product?.product._id)} className={classes.plus}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className={classes.actions}>
              {cartItem?.amount ? (
                <button className={classes.hide}>+ Add To Cart</button>
              ) : (
                <button className={classes.Add} onClick={() => handleAddToCart(1)}>
                  + Add To Cart
                </button>
              )}
            </div>
          </div>
        </li>
      </div>
      <h2 className={classes.search}>Recently Searched</h2>
      <div className={classes.responsive}>
        <Carousel responsive={responsive}>{relatedProductItems}</Carousel>
      </div>
    </>
  );
};

export default ProductItemDetail;
