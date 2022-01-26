import React, { useState, useEffect } from 'react';

export const CatBox = () => {
  const [cat, setCat] = useState({});

  const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
    const dataArray = await response.json();
    console.log(dataArray);
    
    setCat(dataArray[0]);
  };

  useEffect(() => {
    fetchCat();
  }, []);
  
  return (
    <div>
      <img src={cat.url} alt="a cat" />
    </div>
  );
};
