const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "ADD_TO_EQ":
      let index_eq = state.character.eq.findIndex(it => it === action.item);
      let active_item_index = state.character.eq.findIndex(
        it => it.type === action.item.type && it.active
      );
      if (index_eq !== -1 && active_item_index !== -1) {
        state.character.eq[active_item_index].active = false;
        state.character.eq[index_eq].active = true;
        fetch("http://localhost:3001/changeEq", {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            "Content-Type": "application/json"
          }
        });
        return state;
      } else if (active_item_index === -1) {
        state.character.eq[index_eq].active = true;
        fetch("http://localhost:3001/changeEq", {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            "Content-Type": "application/json"
          }
        });
        return state;
      } else {
        return state;
      }

    case "ADD_TO_INVENTORY":
      const index_inv = state.character.eq.findIndex(
        it => it._id === action.item._id
      );
      if (index_inv !== -1) return state;
      state.character.eq.push(action.item);
      fetch("http://localhost:3001/toInventory", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return state;

    case "REMOVE_FROM_EQ":
      const index = state.character.eq.findIndex(
        it => it._id === action.item._id
      );
      if (index !== -1) {
        state.character.eq[index].active = false;
        fetch("http://localhost:3001/toInventory", {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
      return state;

    default:
      return state;
  }
};

export default userReducer;
