import React, {useState} from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { ContentContainer, designTokens, Header, HeaderLink } from "../utils/style";

const BlogLink = styled("div")`
  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: ${designTokens.text.size.large};
  }
  a:hover, a:active {
    color: ${designTokens.colours.accent}
  }
`;

const Tag = styled("button")`
  color: white;
  border-radius: 10%;
  padding: 0 4px;
  background-color: ${designTokens.colours.accent};
  font-weight: 500;
  font-size: ${designTokens.text.size.small};
  margin-right: 8px;
  cursor: pointer;
  border: none;
`;

const Article = styled("article")`
  margin-bottom: 24px;
`;

const PostContainer = styled("div")`
  margin-top: 24px;
`;

const BlogIndex = ({ data, location }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges.filter(post => {
    const tags = post.node.frontmatter.tags;
    let includedInFilter = true;
    for (let tag of selectedTags) {
      if (!tags.includes(tag)) {
        includedInFilter = false;
        break;
      }
    }
    return includedInFilter;
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Natalie's Blog" />
      <header>
        <Header>
          <HeaderLink><Link to="/">Home</Link></HeaderLink>
          <HeaderLink><Link to="/about">About</Link></HeaderLink>
        </Header>
      </header>
      <ContentContainer>
        <h1>Blog</h1>
        <div>
          {selectedTags.map(tag => (
            <Tag onClick={() => {
              const tagToRemove = selectedTags.findIndex(t => t === tag);
              if (tagToRemove >= 0) {
                const newTags = selectedTags.slice();
                newTags.splice(tagToRemove, 1);
                setSelectedTags(newTags);
              } 
            }}>x {tag}</Tag>
          ))}
        </div>
        <PostContainer>
          {posts.map(({ node }) => {
            const tags = node.frontmatter.tags || [];
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Article key={node.fields.slug}>
                <header>
                  <BlogLink>
                    <Link to={node.fields.slug}>
                      {title}
                    </Link>
                  </BlogLink>
                  <small>{node.frontmatter.date}</small>
                  <div>
                    {tags.map(tag => (
                      <Tag onClick={() => {
                        if (!selectedTags.includes(tag)) {
                          setSelectedTags([ ...selectedTags, tag ]);
                        } 
                      }}>{tag}</Tag>
                    ))}
                  </div>
                </header>
              </Article>
            )
          })}
        </PostContainer>
      </ContentContainer>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
          }
        }
      }
    }
  }
`
