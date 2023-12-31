import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <div>
        <h1>{title}</h1>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/projects/'>projects</Link>
      </div>
    </nav>
  );
}
