const app = (state = {}, action) => {
  switch (action.type) {
    case "SERVER_ACTION":
      if (action.app != null) {
        localStorage.setItem("access_token", action.app.security.token);
        return action.app;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default app

