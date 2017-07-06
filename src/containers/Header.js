import React from 'react'
import {connect} from 'react-redux'
import Label from '../components/Label'

const deepFind = (obj, path) => {
  var paths = path.split('.')
    , current = obj
    , i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}


let HeaderComponent = ({content}) => (
  <div className="header_bar">
    <Label className={content.className} text={content.title}></Label>
  </div>
);


const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  console.log(deepFind(state, ownProps.path));


  return {content:Object.assign({}, deepFind(state, ownProps.path))}
};


let Header = connect(
  mapStateToProps
)(HeaderComponent);


export default Header;
