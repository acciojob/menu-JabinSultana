import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const App = () => {

  // Menu Data
  const menuData = [
    {
      id: 1,
      name: "Idli",
      category: "breakfast",
      price: 40,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Dosa",
      category: "breakfast",
      price: 50,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Meals",
      category: "lunch",
      price: 120,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Biryani",
      category: "lunch",
      price: 180,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Chocolate Shake",
      category: "shakes",
      price: 90,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Strawberry Shake",
      category: "shakes",
      price: 100,
      image: "https://via.placeholder.com/150"
    }
  ];

  // State
  const [menuItems, setMenuItems] = useState(menuData);

  // Filter Functions
  const filterBreakfast = () => {
    setMenuItems(
      menuData.filter(item => item.category === "breakfast")
    );
  };

  const filterLunch = () => {
    setMenuItems(
      menuData.filter(item => item.category === "lunch")
    );
  };

  const filterShakes = () => {
    setMenuItems(
      menuData.filter(item => item.category === "shakes")
    );
  };

  return (
    <div id="main">

      {/* Filter Buttons */}
      <button
        id="filter-btn-1"
        onClick={filterBreakfast}
      >
        Breakfast
      </button>

      <button
        id="filter-btn-2"
        onClick={filterLunch}
      >
        Lunch
      </button>

      <button
        id="filter-btn-3"
        onClick={filterShakes}
      >
        Shakes
      </button>

      {/* Menu List */}
      <Menu items={menuItems} />

    </div>
  );
};

export default App;

