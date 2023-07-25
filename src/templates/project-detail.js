import React from "react";
import Layout from "../pages/components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { details, featured, html } from "../styles/project-details.module.css";

export default function ProjectDetails({ data }) {
  console.log(data);
  const htmlText = data.markdownRemark.html;
  const { stack, title, featuredIMG } = data.markdownRemark.frontmatter;
  const image = getImage(featuredIMG.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <div className={details}>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage image={image} alt='Your alt text'></GatsbyImage>
        </div>
        <div dangerouslySetInnerHTML={{ __html: htmlText }} className={html} />
      </div>
    </Layout>
  );
}

// export page query`
export const page = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        featuredIMG {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        title
      }
    }
  }
`;
