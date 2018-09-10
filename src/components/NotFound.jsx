//external
import React, { Component } from 'react';
// Components
import Header from './Header';



class NotFound extends Component{
    componentDidMount(){
      document.title = 'Not found';
  }
    render(){
      return (
        <div className='container'>
          <Header  tagline='404 - Page not found'/>
          <div className='alert alert-warning'>
            <strong>
              Ooops ...sorry! <br/>
            </strong>
            The requested page is not found
          </div>
        </div>
      );
    }
  }

  export default NotFound;
