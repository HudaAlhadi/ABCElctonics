// StripeContainer.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Checkout.js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
