import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <Link to="/" className='navButton' >Home</Link>
        <Link to="/work" className='navButton'>Work</Link>
        <Link to="/about" className='navButton'>About</Link>
      </ul>
      <Contact/>
    </div>
  );
};

export default Navbar;
