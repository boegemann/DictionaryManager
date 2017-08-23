const app = (state = {}, action) => {
    switch (action.type) {
        case "SERVER_ACTION":
            if (action.locale != null && action.locale.current != null) {
                localStorage.setItem("locale", action.locale.current);
                return action.locale;
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default app

