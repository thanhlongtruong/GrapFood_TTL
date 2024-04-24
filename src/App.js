import { Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import { FHome } from './Components/HomePage/Home';
import { FoodRiceRestaurantLocation } from './Components/FoodRiceLocation/FoodRiceRestautantLocation';
import { OwnRestaurant } from './Components/DetailOwnRestaurant/OwnRestaurant';
import { WindowOrder } from './Components/DetailOwnRestaurant/ItemOrderFood';
import { useEffect, useState } from 'react';

export const ClassNamePageHome = () => {
  const [isElement, setElement] = useState(null);
  useEffect(() => {
    const drawerElements = document.querySelector('.container-pageHome');
    setElement(drawerElements);
  }, []);

  return isElement;
};
function App() {
  // Gắn sự kiện lắng nghe sự thay đổi tiêu đề trang

  return (
    <div>
      <Routes>
        <Route path="/GrapFood_TTL" element={FHome()} />
        <Route path="/Food-Rice-Restaurant-Location" element={FoodRiceRestaurantLocation()} />
        <Route path="/Detail-Own-Restaurant-Food-Rice" element={<OwnRestaurant />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
// {WindowOrder()}
