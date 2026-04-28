import React from "react";

const Menu = ({ items }) => {

  return (
    <div>

      {items.map(item => {

        let testId = "";

        if (item.category === "breakfast") {
          testId = "menu-item-breakfast";
        }

        if (item.category === "lunch") {
          testId = "menu-item-lunch";
        }

        if (item.category === "shakes") {
          testId = "menu-item-shakes";
        }

        return (
          <div
            key={item.id}
            data-test-id={testId}
          >

            <img
              src={item.image}
              alt={item.name}
              width="100"
            />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

          </div>
        );

      })}

    </div>
  );
};

export default Menu;
