const CatBox = ({ image, addToBasket, catName, price }) => {
  return (
    <div className="catbox">
      <div>
        <h3>{catName}</h3>
        <img src={image} alt="a cat" />
        <p>£{price}</p>
        <button
          onClick={() => {
            addToBasket({ catName, price, image });
          }}
        >
          Add to basket
        </button>
        <button>Remove from basket</button>
      </div>
    </div>
  );
};

export default CatBox;
