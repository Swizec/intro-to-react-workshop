import React from "react";

import { Hero } from "../elements";

const chunk = <h1>hai</h1>;

export default ({ data }) => {
    const page = data.markdownRemark;

    return (
        <div>
            <Hero>{page.frontmatter.title}</Hero>

            <p>
                This segment covers👇 You can read the text in {page.timeToRead}{" "}
                minutes. Solving the exercises might take longer.
            </p>

            <div dangerouslySetInnerHTML={{ __html: page.tableOfContents }} />
            <div
                dangerouslySetInnerHTML={{
                    __html: page.html
                        .replace(
                            /(src\=\")\/(.+?\.(gif|png|jpg|jpeg))/g,
                            "$1/intro-to-react-workshop/$2"
                        )
                        .replace(
                            /(\/static)\/(.+?\.(gif|png|jpg|jpeg))/g,
                            "/intro-to-react-workshop$1$2"
                        )
                }}
            />
        </div>
    );
};

export const query = graphql`
    query WorkshopPageQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            tableOfContents
            frontmatter {
                title
            }
        }
    }
`;
