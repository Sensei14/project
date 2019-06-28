const isLoggedReducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.isLogged;
    default:
      return state;
  }
};

export default isLoggedReducer;
