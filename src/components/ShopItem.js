import React from "react";
import "../styles/item.css";

const ShopItem = props => {
  return (
    <div className="item" onClick={() => props.addToInventory(props.item)}>
      {props.item.name}
    </div>
  );
};

export default ShopItem;
