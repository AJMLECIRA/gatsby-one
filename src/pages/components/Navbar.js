import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
}
