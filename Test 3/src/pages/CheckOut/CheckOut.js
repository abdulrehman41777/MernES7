import React from 'react';
import Stripe from 'stripe';

 



const CheckOut = () => {

    
    const stripe = new Stripe('pk_test_51MtGgQJ8CQqp3LxfupUw8gK7n3sSJ8F9BbtScGkwvgr9K95hTLHCVVnoBsCzpPhT0NLrohwVgspG5e0P5YP0pw2Q00Z07Nk5OU');

    const handleCheckout = async () => {
        try{
        const result = await stripe.redirectToCheckout({
          items: [{ sku: 'sku_12345', quantity: 1 }],
          successUrl: 'https://example.com/success',
          cancelUrl: 'https://example.com/cancel',
        });

        }catch(err){
          console.error(err);
        }
      }

  return (
    <div>
      <h1>Alpha here</h1>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default CheckOut
