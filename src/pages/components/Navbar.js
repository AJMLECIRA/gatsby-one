import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>Mirrorworld</h1>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
}
