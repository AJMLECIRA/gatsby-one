import React from "react";
import Layout from "./components/Layout";
import { header, btn } from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to='/'>
            Projects
          </Link>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt='Your alt text'
        />
      </section>
    </Layout>
  );
}
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "mirrorworldlogo600x600.png" }) {
      id
      name
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
