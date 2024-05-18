// CheckoutForm.js
import React, { useState } from 'react';
import './Checkout.css'
import { useContext } from 'react';
import CartContext from '../../Store/Cart-context';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; // 
//const accessToken = localStorage.getItem('accessToken'); // Retrieve the access token from local storage


const CheckoutForm = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const ctx = useContext(CartContext);
  const amount = ctx.totalAmount;

  const stripe = useStripe(); 
  const elements = useElements(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!stripe || !elements) {
        throw new Error('Stripe.js not loaded');
      }

      const { token, error } = await stripe.createToken(elements.getElement(CardElement));
      console.log(token.id)

      if (error) {
        setError(error.message);
        return;
      }

      const response = await fetch('/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'Authorization': ''},
        body: JSON.stringify({
          token: token.id,
          amount: amount,
          email: email,
          description: description
        })
      });

      const res = await response.json();
      console.log(res.data);

      setCardNumber('');
      setEmail('');
      setDescription('');
    } catch (error) {
      setError(error.response); // Set error state if request fails
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <CardElement />
      <button type="submit">Pay</button>
      {error && <div>{error}</div>} {/* Display error message if present */}
    </form>
  );
};

export default CheckoutForm;
