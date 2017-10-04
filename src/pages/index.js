import React from 'react';
import Link from 'gatsby-link';

import RandomOwl from '../images/random-image-005.jpg';
import Swizec from '../images/swizec.jpg';
import { Iframe } from '../elements';

const MDLink = ({ node }) => (
    <li key={node.id}>
        <Link to={node.fields.slug}>
        {node.frontmatter.title} - {node.timeToRead} min read
        </Link>
    </li>
)

const ListContentPages = ({ data }) => (
    <div>
        <h1>Setlist</h1>
        <ul>
            {data.allMarkdownRemark.edges.map(MDLink)}
        </ul>
    </div>
);

const Welcome = () => (
    <div>
        <h1>Hello new friend 👋</h1>

        <p>Welcome to Swizec's Intro to React Workshop. Today you will build your first webapp React and Friends.</p>
        <p>Your day starts at the very beginning: <em>Why React? What problem does it solve? What makes it tick? What's the ecosystem like? Why are components the future?</em></p>
        <p>By the end of the day you'll have built your first React app.</p>
        <p>Something like this 👇</p>

        <Iframe src="http://mortysmindblowers.fun" />

        <p><a href="http://mortysmindblowers.fun">Morty's Mindblowers</a> — it shows gifs from Imgur's frontpage stitched together with cutscenes from a Rick & Morty episode where Morty discovers deleted memories.</p>
    </div>
);

const WhoSwiz = () => (
    <div>
        <h2>Swizec Teller</h2>

        <a href="https://swizec.com"><img src={Swizec} title="Swizec at Write the Docs Prague in 2014" /></a>

        <p>I'm Swizec, I'll be helping you out today</p>
        <p>You can find out stuff about me if you ask Google. But generally speaking I've:</p>
        <ul>
            <li>been coding for over 20 years</li>
            <li>published <a href="http://nightowlsbook.com/">Why Programmers Work at Night</a>, that was fun</li>
            <li>published <a href="https://www.packtpub.com/web-development/data-visualization-d3js">Data Visualization with D3.js</a>, dare ask me about publishers</li>
            <li>published 3 editions of <a href="https://www.swizec.com/reactd3js/">React + D3</a></li>
            <li>helped over 10,000 people become better engineers</li>
            <li>made this <a href="https://es6cheatsheet.com">interactive ES6 cheatsheet</a></li>
        </ul>
    </div>
);

const Start = () => (
    <div>
        <h1>Let's get down to business</h1>
        <p>This is an interactive workshop. If you have a question, <b>ask</b>. If something doesn't make sense, <b>ask</b>. If something is confusing, <b>ask</b>. If I'm not making sense, <b>ask</b>. If your code doesn't work, <b>ask</b>.</p>
        <p>You will write code today. The code will live on your computer.</p>
        <p>We will take breaks.</p>
        <p>All code works with <b>React 16</b> and is written in modern <b>ES6+</b>. Code assumes a development environment created with <code>create-react-app</code>. This gives us some special powers. I will point them out.</p>
    </div>
);

const IndexPage = ({ data }) => (
    <div>
        <img src={RandomOwl} title={`Literally first hit for "random image"`}/>

        <Welcome />
        <WhoSwiz />

        <Start />

        <p>Here's the setlist for today 👇</p>

        <ListContentPages data={data} />
    </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          timeToRead
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
