"use client"

import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage = () => {
  const { cartItems } = useCart();

  const handleButtonClick = () => {
    console.log("button clicked");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="space-y-4">
          {cartItems.map((service, index) => (
            <li key={index} className="p-5 shadow-lg rounded-lg bg-white">
              <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-gray-500">Duration: {service.duration}</p>
              <p className="text-gray-500">Price: {service.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p className="text-center text-gray-600">No items in the cart.</p>
          <button onClick={handleButtonClick}>Click</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
