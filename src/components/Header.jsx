import React, {Component} from 'react';

class Header extends Component{
  render(){
    return (
      <div>
        <h1>What to do?</h1>
        <span>{this.props.tagline}</span>
      </div>)

  }
};

export default Header;
