const screen = (state = {}, action) => {
  switch (action.type) {
    case "SERVER_ACTION":
      return (action.screen !== null) ? action.screen : state;
    default:
      return state;
  }
};

export default screen

