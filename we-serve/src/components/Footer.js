import React from 'react';

export default function Footer(props) {
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 text-center">
          <h4>Total : ₹{props.totalAmount}</h4>
        </div>
      </div>

      {/* Add bottom margin here using mb-5 */}
      <div className="row justify-content-center gap-2 mb-5">
        <div className="col-4 col-md-2">
          <button className="btn btn-danger w-100" onClick={props.resetQuantity}>
            Reset
          </button>
        </div>
        <div className="col-4 col-md-2">
          <button className="btn btn-primary w-100">Pay Now</button>
        </div>
      </div>
    </>
  );
}
