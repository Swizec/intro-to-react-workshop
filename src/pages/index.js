import React from 'react';
import Link from 'gatsby-link';

const MDLink = ({ node }) => (
    <li key={node.id}>
        <Link to={node.fields.slug}>
        {node.frontmatter.title}
        </Link>
    </li>
)

const ListMDPages = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h2>Markdown Pages - {data.allMarkdownRemark.totalCount}</h2>
            <ul>
                {data.allMarkdownRemark.edges.map(MDLink)}
            </ul>
        </div>
    );
}


const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ListMDPages data={data} />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage
