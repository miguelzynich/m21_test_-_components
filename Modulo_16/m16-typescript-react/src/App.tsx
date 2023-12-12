import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Page/header/Header';
import OffBanner from './Components/Page/offBanner/OffBanner';
import ProductsPopular from './Components/Page/productsPopular/ProductsPopular';
import SlickerCategories from './Components/Page/slickerCategories/SlickerCategories';
import SlickerSlides from './Components/Page/slickerSlides/SlickerSlides';
import 'tachyons/css/tachyons.min.css';

function App() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3003/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error !== null) {
    return <div>Erro: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Carregando...</div>;
  } else {
    return (
      <div className="App">
        <Header />
        <SlickerSlides />
        <OffBanner />
        <SlickerCategories />
        <ProductsPopular items={items} />
      </div>
    );
  }
}

export default App;
