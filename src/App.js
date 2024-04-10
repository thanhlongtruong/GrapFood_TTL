import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import styled from 'styled-components';
// import React, { useState, useEffect } from 'react'

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/HomePage/Home";
import { FoodRiceRestaurantLocation } from "./Components/FoodRiceLocation/FoodRiceRestautantLocation";
import { OwnRestaurant } from "./Components/DetailOwnRestaurant/OwnRestaurant";
import { WindowOrder } from "./Components/DetailOwnRestaurant/ItemOrderFood";
import { useEffect, useState } from "react";

export const ClassNamePageHome = () => {
  const [isElement, setElement] = useState(null);
  useEffect(() => {
    const drawerElements = document.querySelector(".container-pageHome");
    setElement(drawerElements);
  }, []);

  return isElement;
};
function App() {
  return (
    <div className="container-display-appWeb">
      <div className="container-pageHome">
        <Header />

        <Routes>
          <Route path="/" element={Home()} />
          <Route
            path="/Food-Rice-Restaurant-Location"
            element={FoodRiceRestaurantLocation()}
          />
          <Route
            path="/Detail-Own-Restaurant-Food-Rice"
            element={<OwnRestaurant />}
          />
        </Routes>

        <Footer />
      </div>
      {WindowOrder()}
    </div>
  );
}
export default App;
/* const [isStateA, setState] = useState(true);
  if (isStateA) {
    return (
      <div className="container-pageHome">
        {Header()}

        <Routes>
          <Route path="/" element={Home()} />
          <Route
            path="/Food-Rice-Restaurant-Location"
            element={FoodRiceRestaurantLocation()}
          />
          <Route
            path="/Detail-Own-Restaurant-Food-Rice"
            element={<OwnRestaurant />}
          />
        </Routes>

        {Footer()}
      </div>
    );
  } else {
    return <div className="box-drawer-order-food"></div>;
  } */
