import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({saving}) =>{
  return (
   <nav>
      <IndexLink to= "/" activeClassName="active" >Home</IndexLink>
      {"|"}
     <IndexLink to="courses" activeClassName="active">Courses</IndexLink>
      {"|"}
      <Link to="/about" activeClassName="active">About</Link>
      {saving && <LoadingDots interval={100} dots={20} />  }
   </nav>
  );
};

Header.propTypes = {
  saving: PropTypes.bool.isRequired
};


export default Header;
