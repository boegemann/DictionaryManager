const header = (state = {}, action) => {
  switch (action.type) {
    case "SERVER_ACTION":
      return (action.header !== null) ? action.header : state;
    default:
      return state;
  }
};

export default header

