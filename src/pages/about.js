import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container, ImageContainer, Header, HeaderLink } from "../utils/style";

const About = styled("div")`
  width: 100%;
  max-width: 400px;
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Natalie" />
      <header>
        <Header>
          <HeaderLink><Link to="/">Home</Link></HeaderLink>
          <HeaderLink><Link to="blog">Blog</Link></HeaderLink>
        </Header>
      </header>
      <Container>
        <ImageContainer>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={`${author} with dog on top of a mountain`}
          />
        </ImageContainer>
        <About>
          <h1>About me</h1>
          <p>
            I am a software engineer, I live in Vancouver, I work remotely, I have two dogs, I love hiking, reading, hot chocolate.
            I do a lot of Javascript (Typescript, React, Node, etc) but I'm generally interested in building cool (ethical!) products with interesting and kind people.
            I especially like shipping stuff to users, seeing how they use it, and making it better for them.
          </p>
        </About>
      </Container>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/nat_max.jpg/" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
