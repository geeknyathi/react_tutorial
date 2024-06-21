import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';

export default function PublicLayout(props) {

  const location = useLocation();

  console.log(location);

  return (
    <div>
      
      {/* navbar */}
      <Navbar/>
      {/* body */}
      {props.children}

      {/* footer */}


    </div>
  )
}
