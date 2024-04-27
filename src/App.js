import { Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

import { FHome } from './Components/HomePage/Home';
import { FoodRiceRestaurantLocation } from './Components/FoodRiceLocation/FoodRiceRestautantLocation';
import { OwnRestaurant } from './Components/DetailOwnRestaurant/OwnRestaurant';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/GrapFood_TTL" element={<FHome />} />
        <Route path="/Food-Rice-Restaurant-Location" element={<FoodRiceRestaurantLocation />} />
        <Route path="/Detail-Own-Restaurant-Food-Rice" element={<OwnRestaurant />} />
      </Routes>
    </div>
  );
}
export default App;
