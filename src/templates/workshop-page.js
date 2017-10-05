
import React from 'react';

import { Hero } from '../elements';

export default ({ data }) => {
    const page = data.markdownRemark;

    return (
        <div>
            <Hero>{page.frontmatter.title}</Hero>

            <p>This segment covers👇 You can read the text in {page.timeToRead} minutes. Solving the exercises might take longer.</p>
            <p>Swizec might talk in more depth than this text.</p>

            <div dangerouslySetInnerHTML={{ __html: page.tableOfContents}} />
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
