import React from 'react';

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      productName: '',
      productPrice: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { productName, productPrice } = this.state;

    // Prevent empty name or invalid price
    if (productName.trim() === '' || productPrice <= 0) {
      alert("Please enter a valid name and price.");
      return;
    }

    this.props.addItem(productName, productPrice);

    // Reset the form
    this.setState({
      productName: '',
      productPrice: 0,
    });
  };

  render() {
    return (
      <div className="container my-4">
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="inputName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="productName"
              value={this.state.productName}
              onChange={(e) =>
                this.setState({ productName: e.currentTarget.value })
              }
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              name="productPrice"
              value={Number(this.state.productPrice)}
              onChange={(e) =>
                this.setState({
                  productPrice: Number(e.currentTarget.value),
                })
              }
              required
              min="1"
            />
          </div>

          <div className="col-md-4 d-flex align-items-end">
            <button type="submit" className="btn btn-success w-100">
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
