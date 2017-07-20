import React from 'react';
import {withRouter} from "react-router-dom";

class ApplicationComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {navigating: false}
  }

  componentWillReceiveProps(nextProps) {
    let {navigation, history} = nextProps;
    if (window.location.pathname !== navigation.currentUrl) {
      this.setState({...this.state, navigating: true})
      history.push(navigation.currentUrl);
    } else {
      this.setState({...this.state, navigating: false})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only render once we arrived after a location change
    console.log("---");
    console.log(window.location.pathname);
    console.log(nextProps.navigation.currentUrl);
    return !this.state.navigating;
  }


  render() {
    console.log("Re-render")
    return <div className="core_application">
      <h1>Hello {this.props.title} {this.props.navigation.currentUrl} </h1>
    </div>
  }
}


export default withRouter(ApplicationComponent);

