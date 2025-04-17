import React from 'react';
import Navbar from '@theme-original/Navbar';

function NavbarWrapper(props) {
  console.log('Navbar - Custom component loaded!');
  return <Navbar {...props} />;
}

export default NavbarWrapper;
