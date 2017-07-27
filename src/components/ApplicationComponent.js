import React from 'react';
import {withRouter} from "react-router-dom";


class ApplicationComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {navigating: true}
  }

  componentWillReceiveProps(nextProps) {
    let {navigation, history} = nextProps;
    if (nextProps.title !== this.props.title) {
      document.title = nextProps.title;
    }
    if (nextProps.navigation.currentUrl !== this.props.navigation.currentUrl) {
      console.log("Navigating")
      console.log("Pushing: " + navigation.currentUrl +  " - was: " + this.props.navigation.currentUrl);
      if (this.state.browserNavigation===true){
        // the bbrowser initiated this navigation, no reason to play with history as well
        this.setState({"browserNavigation":false, navigating:false});
      }else{
        history.push(navigation.currentUrl);
        this.setState({navigating: true, lastLocation:navigation.currentUrl})
      }
    }else{
      console.log("Now")
      console.log(this.state.navigating)
      if (this.state.navigating===true){
        this.setState({navigating: false});
      }else{
        this.setState({"browserNavigation":true, navigating:false, lastLocation:window.location.pathname});
        this.props.navigate(this.state.lastLocation, window.location.pathname);
      }
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    // only render once we arrived after a location change
    return !this.state.navigating;
  }



  render() {
    console.log("Re-render")
    return <div/>
  }
}


export default withRouter(ApplicationComponent);

