import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return(
      <div className='jumbotron'>
        <h1>Pluralsight administration</h1>
        <p> React, React Router, and Flux for extra-responsive web apps</p>
        <Link to="about" className = 'btn btn-primary btn-lg'>Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
