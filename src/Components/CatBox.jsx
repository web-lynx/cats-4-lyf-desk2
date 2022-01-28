import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';

export const CatBox = () => {
  const [cat, setCat] = useState({});
  const catPrice = (Math.random() * 10).toFixed(2)
  const catNames = require('cat-names');
  const addItem = useCart();

  const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
    const dataArray = await response.json();
    console.log(dataArray[0]);
    setCat(dataArray[0]);
  };

  useEffect(() => {fetchCat();}, []);
  
  return (
    <div className="catbox col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
      <img className="catbox-image" class="card-img-top img-fluid" src={cat.url} alt="a cat" />
      <h5 className="catbox-title">{catNames.random()}</h5>
      <h5 className="cat-price">£{catPrice}</h5>
      <button class="btn btn-success" onClick={() =>addItem()}>Add to Cart</button>
      </div>
    </div>
  );
};

export default CatBox