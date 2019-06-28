const isLoggedReducer = (state = [], action) => {
  switch (action.type) {
    case "LOADED":
      return action.items;
    default:
      return state;
  }
};

export default isLoggedReducer;
