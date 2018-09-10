import React, {Component} from 'react';

// class Header extends Component{
//   render(){
//     return (
//       <div>
//         <h1>What to do?</h1>
//         <span>{this.props.tagline}</span>
//       </div>)
//
//   }
// };

// **stateless Functional Component**
  // in this case we use {props.tagline} instead of {this.props.tagline}

const Header = props => {
  return (
    <div className="header">
      <h1>What to do?</h1>
      <span className="tagline">{props.tagline}</span>
    </div>
  );
};

export default Header;
