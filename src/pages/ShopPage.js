import React, { Component } from "react";
import "../styles/shop.css";
import "../styles/character.css";
import { connect } from "react-redux";
import EqItem from "../components/EqItem";
import ShopItem from "../components/ShopItem";
import store from "../config/store";
import { isUndefined } from "util";

class ShopPage extends Component {
  state = {
    inventory: [...this.props.inventory]
  };

  addToInventory = item => {
    store.dispatch({
      type: "ADD_TO_INVENTORY",
      item
    });
    const inventory = store.getState().user.character.eq;
    this.setState({
      inventory
    });
  };

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
    const eq = this.state.inventory;
    const weapon = eq.find(it => it.type === "weapon" && it.active);
    const helmet = eq.find(it => it.type === "helmet" && it.active);
    const armor = eq.find(it => it.type === "armor" && it.active);
    const boots = eq.find(it => it.type === "boots" && it.active);
    const shield = eq.find(it => it.type === "shield" && it.active);

    const items = this.props.items.map(item => (
      <ShopItem
        key={item._id}
        item={item}
        addToInventory={this.addToInventory}
      />
    ));
    let inventory = [...this.state.inventory];
    inventory = inventory.filter(item => item.active === false);
    inventory = inventory.map(item => (
      <EqItem key={item._id} item={item} changeEq={this.changeEq} />
    ));
    return (
      <div className="store">
        <div className="shop">{items}</div>

        <div className="character-eq-shop">
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
                <EqItem key={armor._id} item={armor} changeEq={this.changeEq} />
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
                <EqItem key={boots._id} item={boots} changeEq={this.changeEq} />
              )}
            </div>
          </div>

          <div className="shop-inventory"> {inventory}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: [...state.items],
    inventory: [...state.user.character.eq]
  };
};

export default connect(mapStateToProps)(ShopPage);
