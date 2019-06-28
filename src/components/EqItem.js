import React from "react";
import "../styles/item.css";

const EqItem = props => {
  let img;
  try {
    img = require(`../images/${props.item.name}.png`);
  } catch {
    img = require("../images/default.png");
  }
  const item = props.item;
  const type = item.type;
  let itemDescribe = null;
  const weaponDescribe = (
    <div>
      <p>{item.name}</p>
      <label>Ranga: {item.rank}</label>
      <label>
        Obrażenia: {item.dmg_min} - {item.dmg_max}
      </label>
      <label>Siła: {item.strength_bonus}</label>
      <label>Wymagany poziom: {item.lvl_req}</label>
    </div>
  );

  const armorDescribe = (
    <div>
      <p>{item.name}</p>
      <label>Ranga: {item.rank}</label>
      <label>Pancerz: {item.defence}</label>
      <label>Zdrowie: {item.health_bonus}</label>
      <label>Witalność: {item.vitality_bonus}</label>
      <label>Wymagany poziom: {item.lvl_req}</label>
    </div>
  );

  const helmetDescribe = (
    <div>
      <p>{item.name}</p>
      <label>Ranga: {item.rank}</label>
      <label>Pancerz: {item.defence}</label>
      <label>Witalność: {item.vitality_bonus}</label>
      <label>Wymagany poziom: {item.lvl_req}</label>
    </div>
  );

  const shieldDescribe = (
    <div>
      <p>{item.name}</p>
      <label>Ranga: {item.rank}</label>
      <label>Pancerz: {item.defence}</label>
      <label>Zdrowie: {item.health_bonus}</label>
      <label>Wymagany poziom: {item.lvl_req}</label>
    </div>
  );

  const bootsDescribe = (
    <div>
      <p>{item.name}</p>
      <label>Ranga: {item.rank}</label>
      <label>Pancerz: {item.defence}</label>
      <label>Zwinność: {item.agility_bonus}</label>
      <label>Wymagany poziom: {item.lvl_req}</label>
    </div>
  );

  if (type === "weapon") {
    itemDescribe = weaponDescribe;
  } else if (type === "armor") {
    itemDescribe = armorDescribe;
  } else if (type === "boots") {
    itemDescribe = bootsDescribe;
  } else if (type === "shield") {
    itemDescribe = shieldDescribe;
  } else if (type === "helmet") {
    itemDescribe = helmetDescribe;
  }

  return (
    <div
      className="itemEQ"
      style={{ backgroundImage: `url(${img})` }}
      onClick={() => props.changeEq(props.item)}
    >
      <span className="itemDescribe">{itemDescribe}</span>
    </div>
  );
};

export default EqItem;
