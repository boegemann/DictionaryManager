const app = (state = {}, action) => {
  switch (action.type) {
    case "REDIRECT":
      let newUrl = action.newPath;
      if (state.navigation.currentUrl !== newUrl) {
        return {...state, navigation: {currentUrl: newUrl, needsNavigation: true}}
      } else {
        console.log("Huh")
        return {...state, needsNavigation: false}
      }
    default:
      return state
  }
};

export default app
