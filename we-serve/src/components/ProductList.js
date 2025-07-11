import React from 'react';
import Product from './Product.js';
import { FaShoppingCart } from 'react-icons/fa';

export default function ProductList(props) {
  return (
    <div className="container">
      {/* Cart Header */}
      <div className="row align-items-center mb-4">
        <div className="col">
          <h3>
            <FaShoppingCart className="me-2" />
            Cart
          </h3>
        </div>
      </div>

      {/* Conditional Rendering of Product List */}
      {props.productList.length > 0 ? (
        props.productList.map((product, i) => (
          <Product
            product={product}
            key={i}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            index={i}
            removeItem={props.removeItem}
          />
        ))
      ) : (
        <h1 className="text-center">No items in the cart</h1>
      )}
    </div>
  );
}
