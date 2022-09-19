import React from "react";

function HamburguerMenu({ toggleNavBar }) {
  return (
    <div
      className="header-hamburguer"
      onClick={() => toggleNavBar((prevState) => !prevState)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HamburguerMenu;
