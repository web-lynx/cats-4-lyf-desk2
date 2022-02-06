import React, { useState, useEffect } from "react";
import "./App.css";
import CatModal from "./Components/CatModal";
import CatBox from "./Components/CatBox";
import catNames from "cat-names";

const App = () => {
  const [cat, setCat] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  const fetchCat = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=9"
    );
    const dataArray = await response.json();
    dataArray.map((catData) => {
      catData.price = (Math.random() * 10).toFixed(2);
      catData.catName = catNames.random();
      return catData;
    });
    setCat(dataArray);
    console.log(dataArray);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  };

  return (
    <div className="App">
      <h1>Cats 4 Lyf</h1>
      <h2>"Because a Cat's for Lyf, not just for Christmas"</h2>
      <CatModal basketItems={basketItems} />
      <div className="img-container">
        {cat.map((cat) => (
          <CatBox
            catName={cat.catName}
            price={cat.price}
            addToBasket={addToBasket}
            image={cat.url}
            key={cat.id}
            id={cat.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
