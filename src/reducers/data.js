const data = (state = {}, action) => {
  switch (action.type) {
    case "SERVER_ACTION":
      return action.data;
    default:
      return state;
  }
};

export default data

