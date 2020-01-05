import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ContentContainer, Header, HeaderLink } from "../utils/style";

const List = styled("ul")`
  list-style-type: none;

  li {
    margin-bottom: 10px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <header>
        <Header>
          <HeaderLink><Link to="/">Home</Link></HeaderLink>
          <HeaderLink><Link to="/about">About</Link></HeaderLink>
          <HeaderLink><Link to="/blog">Blog</Link></HeaderLink>
        </Header>
      </header>
      <ContentContainer>
        <article>
          <header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <p>
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr/>
        </article>

        <nav>
          <List>
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </List>
        </nav>
      </ContentContainer>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
