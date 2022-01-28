import React from 'react';
import './App.css';
import CatCart from "./Components/CatCart";
import { CatContainer } from './Components/CatContainer';
import { CartProvider } from 'react-use-cart';

const App = () => {
  
  return (
    <div className="App">
      <h1>Cats 4 Lyf - Your Cat Buying Solution</h1>
      <section>
        <div>
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
