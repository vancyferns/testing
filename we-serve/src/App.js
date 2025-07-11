import React, { useState } from 'react'; 
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';
import AddItem from './components/AddItem';

function App() {
  const initialProductList = [
    { item_name: "Fish Thali", price: 200, quantity: 0 },
    { item_name: "Chicken Chilli", price: 180, quantity: 0 },
    { item_name: "Prawns Curry", price: 120, quantity: 0 },
    { item_name: "Chicken Cafrael", price: 250, quantity: 0 }
  ];

  const [productlist, setProductList] = useState(initialProductList);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productlist];
    newProductList[index].quantity += 1;
    setProductList(newProductList);
    setTotalAmount(totalAmount + newProductList[index].price);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productlist];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity -= 1;
      setTotalAmount(totalAmount - newProductList[index].price);
    }
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    const newProductList = productlist.map(product => ({
      ...product,
      quantity: 0
    }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productlist];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1); 
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem =(name,price)=>{

    let newProductList = [...productlist];
    newProductList.push(
      {item_name:name, price:price, quantity: 0}
    );
     setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <AddItem addItem={addItem}/>
      <main className="container mt-3">
        <ProductList
          productList={productlist}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <footer className="container mt-3">
        <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
      </footer>
    </>
  );
}

export default App; 
