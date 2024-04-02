import './App.css';
import { ShopItemClass } from './components/ShopItemClass';

function App() {
  const shopItem = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: '399.00',
    currency: '£',
  };

  return (
    <>
      <ShopItemClass item={shopItem}></ShopItemClass>
    </>
  );
}

export default App;
