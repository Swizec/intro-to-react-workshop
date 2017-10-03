
import React from 'react';

export default ({ data }) => {
    const page = data.markdownRemark;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
    )
}

export const query = graphql`
  query WorkshopPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
