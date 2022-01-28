import { useCart } from 'react-use-cart';
import CatBox from './components/CatBox';

const CatCard = () => {
  const { addItem } = useCart();

CatBox.map((catArray) => {
return (
    <div className="catbox">
      <div>
      <img className="catbox-image" src={catArray.image} alt="a cat" />
      <h5 className="catbox-title">{catArray.name}</h5>
      <h5 className="cat-price">£{catArray.price}</h5>
      <button class="btn btn-success" onClick={() => addItem(catArray.id)}>Add to Cart</button>
      </div>
    </div>
  );
  }
 );
}

export default CatCard;
