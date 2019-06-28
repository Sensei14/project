import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/character.css";
import store from "../config/store";
import { isUndefined } from "util";
import EqItem from "../components/EqItem";

class CharacterPage extends Component {
  state = {};

  changeEq = item => {
    if (!item.active) {
      store.dispatch({
        type: "ADD_TO_EQ",
        item
      });
    } else if (item.active) {
      store.dispatch({
        type: "REMOVE_FROM_EQ",
        item
      });
    }

    this.forceUpdate();
  };

  render() {
    const character = this.props.character;

    let inv = this.props.character.eq.filter(item => item.active === false);
    inv = inv.map(item => (
      <EqItem key={item._id} item={item} changeEq={this.changeEq} />
    ));

    const eq = this.props.character.eq;
    const weapon = eq.find(it => it.type === "weapon" && it.active);
    const helmet = eq.find(it => it.type === "helmet" && it.active);
    const armor = eq.find(it => it.type === "armor" && it.active);
    const boots = eq.find(it => it.type === "boots" && it.active);
    const shield = eq.find(it => it.type === "shield" && it.active);

    let dmg_min = character.dmg_min,
      dmg_max = character.dmg_max,
      health = character.health,
      vitality = character.vitality,
      dexterity = character.dexterity,
      agility = character.agility,
      defence = character.defence,
      strength = character.strength;

    const bonuses = this.props.character.eq.filter(
      item => item.active === true
    );

    bonuses.forEach(item => {
      dmg_min += item.dmg_min;
      dmg_max += item.dmg_max;
      health += item.health_bonus;
      vitality += item.vitality_bonus;
      dexterity += item.dexterity_bonus;
      agility += item.agility_bonus;
      defence += item.defence;
      strength += item.strength_bonus;
    });

    // if (weapon) {
    //   dmg_min += weapon.dmg_min;
    //   dmg_max += weapon.dmg_max;
    //   dexterity += weapon.dexterity_bonus;
    //   strength += weapon.strength_bonus;
    // }
    // if (helmet) {
    //   defence += helmet.defence;
    //   health += helmet.health_bonus;
    //   vitality += helmet.vitality_bonus;
    // }
    // if (armor) {
    //   defence += armor.defence;
    //   health += armor.health_bonus;
    //   vitality += armor.vitality_bonus;
    // }
    // if (boots) {
    //   defence += boots.defence;
    //   health += boots.health_bonus;
    //   agility += boots.agility_bonus;
    // }
    // if (shield) {
    //   defence += shield.defence;
    //   health += shield.health_bonus;
    // }

    return (
      <div>
        <div className="character">
          <div className="character-stats">
            <span>{character.name}</span>
            <ul>
              <li>
                <label>Poziom: {character.lvl}</label>
              </li>
              <li>
                <label>Doświadczenie: {character.exp}</label>
              </li>
              <li>
                <label>Zdrowie: {health}</label>
              </li>
              <li>
                <label>Siła: {strength}</label>
              </li>

              <li>
                <label>Witalność: {vitality}</label>
              </li>
              <li>
                <label>Zręczność: {dexterity}</label>
              </li>
              <li>
                <label>Zwinność: {agility}</label>
              </li>

              <li>
                <label>
                  Obrażenia: {dmg_min} - {dmg_max}
                </label>
              </li>
              <li>
                <label>Obrona: {defence}</label>
              </li>
            </ul>
          </div>
          <div className="character-eq">
            <div className="equipment">
              <div className="helmet">
                {isUndefined(helmet) ? null : (
                  <EqItem
                    key={helmet._id}
                    item={helmet}
                    changeEq={this.changeEq}
                  />
                )}
              </div>
              <div className="weapon">
                {isUndefined(weapon) ? null : (
                  <EqItem
                    key={weapon._id}
                    item={weapon}
                    changeEq={this.changeEq}
                  />
                )}
              </div>
              <div className="armor">
                {isUndefined(armor) ? null : (
                  <EqItem
                    key={armor._id}
                    item={armor}
                    changeEq={this.changeEq}
                  />
                )}
              </div>
              <div className="shield">
                {isUndefined(shield) ? null : (
                  <EqItem
                    key={shield._id}
                    item={shield}
                    changeEq={this.changeEq}
                  />
                )}
              </div>
              <div className="boots">
                {isUndefined(boots) ? null : (
                  <EqItem
                    key={boots._id}
                    item={boots}
                    changeEq={this.changeEq}
                  />
                )}
              </div>
            </div>
            <div className="inventory">{inv}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user
  };
};

export default connect(mapStateToProps)(CharacterPage);
