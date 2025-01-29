import React, { useContext } from 'react';
import { CartContext } from '../../App';

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Page</h2>
      <p>Cart: {Object.values(cart).length}</p>
    </div>
  );
}