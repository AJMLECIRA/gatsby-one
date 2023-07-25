import React from "react";
import Layout from "../components/Layout";
import { portfolio, proj } from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function projects({ data }) {
  console.log(data);
  const projects = data.pj.nodes;
  const title = data.contact.siteMetadata.title;
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and websites created</h3>
        <div className={proj}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt='Your alt text'
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <h3>{title}</h3>
      </div>
    </Layout>
  );
}

// export page query`
export const page = graphql`
  query ProjectsPage {
    pj: allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        title
      }
      id
    }
  }
`;
