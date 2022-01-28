import { useState, useEffect } from 'react';

export const CatBox = () => {
  const [cat, setCat] = useState({});
  const catNames = require('cat-names');

  const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
    const dataArray = await response.json();
    console.log(dataArray[0]);
    setCat(dataArray[0]);
  };

  useEffect(() => {fetchCat();}, );
  
  let catArray = [];
  for (var i = 0; i < 9; i ++) {
  fetchCat()
  catArray[i] = {
    id: "cat" + i,
    name: catNames.random(),
    price: (Math.random() * 10).toFixed(2),
    image: cat[0].image
 };
};
};

export default CatBox