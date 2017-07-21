import React from 'react';
import {withRouter} from "react-router-dom";

class ApplicationComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {navigating: false}
  }

  componentWillReceiveProps(nextProps) {
    let {navigation, history} = nextProps;
    if (nextProps.title!==this.props.title){
      document.title=nextProps.title;
    }
    if (window.location.pathname !== navigation.currentUrl) {
      this.setState({...this.state, navigating: true})
      history.push(navigation.currentUrl);
    } else {
      this.setState({...this.state, navigating: false})
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

