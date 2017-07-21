const app = (state = {}, action) => {
  switch (action.type) {
    case "SERVER_ACTION":
      return (action.app !== null) ? action.app : state;
    default:
      return state;
  }
};

export default app

