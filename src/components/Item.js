import React from "react";
import "../styles/item.css";

const Item = props => {
  return (
    <div className="item" onClick={() => props.addToEq(props.item)}>
      {props.item.name}
    </div>
  );
};

export default Item;
