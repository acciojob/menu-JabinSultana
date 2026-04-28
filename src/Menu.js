import React from "react";

const Menu = ({ items }) => {

  return (
    <div className="menu-container">

      {items.map((item) => {

        return (
          <div
            key={item.id}
            data-test-id={`menu-item-${item.category}`}
            className="menu-item"
          >

            <img src={item.img} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.price}</p>

          </div>
        );

      })}

    </div>
  );

};

export default Menu;
