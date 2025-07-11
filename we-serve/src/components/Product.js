import React from 'react';

export default function Product(props) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        {/* Top Row: Item Name & Price */}
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">{props.product.item_name}</h5>
          <h6>
            <span className="badge bg-secondary">₹{props.product.price}</span>
          </h6>
        </div>

        {/* Middle Row: Quantity Controls & Total */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="btn-group" role="group" aria-label="Quantity controls">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => props.decrementQuantity(props.index)}
            >
              -
            </button>
            <button type="button" className="btn btn-outline-secondary" disabled>
              {props.product.quantity}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => props.incrementQuantity(props.index)}
            >
              +
            </button>
          </div>

          <h6 className="mb-0">
            Total: ₹{props.product.quantity * props.product.price}
          </h6>
        </div>

        {/* Bottom Row: Remove Button */}
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-danger w-100"
            onClick={() => props.removeItem(props.index)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
