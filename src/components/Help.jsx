//external
import React, {Component} from 'react';

//Components
import Header from './Header';


class Help extends Component {
  componentDidMount(){ // Lifecycle metthod :this changes the title of the component
    document.title = 'Help | My to do!';
  }
  render(){
    return(
      <div className='container'>
        <Header  tagline='Your questions will be answered here!'/>
        <dl>
          <dt>Where is the data stored?</dt>
          <dd>We store all info in your browser's LocalStorage</dd>
        </dl>
      </div>
    );
  }
}

export default Help;
