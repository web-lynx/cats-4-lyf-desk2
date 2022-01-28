import React from 'react';
import './App.css';
import CatCart from "./Components/CatCart";
import { CatContainer } from './Components/CatContainer';
import { CartProvider } from 'react-use-cart';

const App = () => {
  
  return (
    <div className="App">
      <h1 className='text-center mt-3'>Cats 4 Lyf - Your Cat Buying Solution</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          <CartProvider>
          <CatContainer />
          <CatCart/>
          </CartProvider>
        </div> 
      </section>
   </div> 
  );
}

export default App;
