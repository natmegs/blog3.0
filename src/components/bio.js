/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, designTokens, ImageContainer } from "../utils/style";

const Nav = styled("div")`
  display: inline;
  margin-right: 18px;
  font-size: 20px;

  a {
    padding: 8px;
  }

  a, a:visited {
    color: black;
    border: 3px solid ${designTokens.colours.accent};
    text-decoration: none;
  }

  a:hover, a:active {
    color: ${designTokens.colours.accent};
  }
`;

const Description = styled("div")`
  width: 100%;
  max-width: 400px;
`;

const SocialContainer = styled("div")`
  margin-top: 24px;
`;

const SocialLink = styled("a")`
  margin-right: 10px;
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/nat_betty.jpg/" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <Container>
      <ImageContainer>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={`${author} with dog on top of a mountain`}
        />
      </ImageContainer>
      <Description>
        <h1>Natalie</h1>
        <Nav><Link to="/about">About</Link></Nav>
        <Nav><Link to="/blog">Blog</Link></Nav>
        <SocialContainer>
          <SocialLink target="_blank" href="https://www.linkedin.com/in/smithnm/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} style={{color: designTokens.colours.accent}} />
          </SocialLink>
          <SocialLink href="mailto:nataliemegans@gmail.com">
            <FontAwesomeIcon icon="envelope" style={{color: designTokens.colours.accent}} />
          </SocialLink>
          <SocialLink target="_blank" href="https://twitter.com/natalie_megan">
            <FontAwesomeIcon icon={["fab", "twitter"]} color={designTokens.colours.accent} />
          </SocialLink>
        </SocialContainer>
      </Description>
    </Container>
  )
}

export default Bio;
