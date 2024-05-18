import React from 'react';
import './rating.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const Rating = ( props ) => {
    const rate= props.rating
    const count =props.rating

  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <=rate) {
      stars.push(<FaStar className='star' />)
    } else {
      stars.push(<CiStar className='empty' />); 
    }
  }

  return (
    <div className='rating'>
      {stars} <span>  {count}</span>
    </div>
  );
};

export default Rating;
