import React, { useState } from "react";
import Menu from "./Menu";
import "./styles/App.css";

const App = () => {

  const menu = [

    {
      id: 1,
      title: "Idli",
      category: "breakfast",
      price: "₹40",
      img: "https://via.placeholder.com/150"
    },

    {
      id: 2,
      title: "Dosa",
      category: "breakfast",
      price: "₹50",
      img: "https://via.placeholder.com/150"
    },

    {
      id: 3,
      title: "Meals",
      category: "lunch",
      price: "₹120",
      img: "https://via.placeholder.com/150"
    },

    {
      id: 4,
      title: "Fried Rice",
      category: "lunch",
      price: "₹100",
      img: "https://via.placeholder.com/150"
    },

    {
      id: 5,
      title: "Chocolate Shake",
      category: "shakes",
      price: "₹80",
      img: "https://via.placeholder.com/150"
    },

    {
      id: 6,
      title: "Vanilla Shake",
      category: "shakes",
      price: "₹70",
      img: "https://via.placeholder.com/150"
    }

  ];

  const [items, setItems] = useState(menu);

  const filterBreakfast = () => {
    const newItems = menu.filter(
      (item) => item.category === "breakfast"
    );
    setItems(newItems);
  };

  const filterLunch = () => {
    const newItems = menu.filter(
      (item) => item.category === "lunch"
    );
    setItems(newItems);
  };

  const filterShakes = () => {
    const newItems = menu.filter(
      (item) => item.category === "shakes"
    );
    setItems(newItems);
  };

  return (

    <div id="main">

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

      <Menu items={items} />

    </div>

  );

};

export default App;
