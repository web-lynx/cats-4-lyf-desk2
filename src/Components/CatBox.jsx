import React, { useState, useEffect } from 'react';

export const CatBox = () => {
  const [cat, setCat] = useState({});
  const catPrice = (Math.random() * 10).toFixed(2)
  const catNames = require('cat-names');

  const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
    const dataArray = await response.json();
    console.log(dataArray[0]);
    setCat(dataArray[0]);
  };

  useEffect(() => {fetchCat();}, []);
  
  return (
    <div className="catbox">
      <div>
        <h3 className="catbox-title">{catNames.random()}</h3>
        <img className="catbox-image" src={cat.url} alt="a cat" />
        <p className="cat-price">£{catPrice}</p>
        <button className="basket-button">Add to basket</button>
        <button className="remove-basket-button">Remove from basket</button>
      </div>
    </div>
  );
};