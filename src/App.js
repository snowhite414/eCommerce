import { Routes, Route} from "react-router";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
        <Navbar />      
        <Routes>
          <Route path="/details" element={<Details/>} exact />
          <Route path="/cart" element={<Cart/>} exact />
          <Route path="/" element={<ProductList/>} exact />
        </Routes>    
        <Modal></Modal>      
      </React.Fragment>
  );
}

export default App;
