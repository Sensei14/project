import React from "react";
import { Switch, Route } from "react-router";
import CharacterPage from "../pages/CharacterPage";
import ShopPage from "../pages/ShopPage";

const Content = props => {
  return (
    <div className="content">
      <Switch>
        <Route path="/character" exact component={CharacterPage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/a" component={() => <div>Strona A</div>} />

        <Route path="/" exact component={() => <div>Strona Startowa</div>} />
      </Switch>
    </div>
  );
};

export default Content;
