import React from "react";
import Link from "gatsby-link";
import { sortBy } from "lodash";
import InstagramEmbed from "react-instagram-embed";

import RandomOwl from "../images/random-image-005.jpg";
import MortysMindblowers from "../images/mortysmindblowers.mp4";
import Swizec from "../images/swizec.jpg";
import StubhubApp from "../images/stubhub-app.mp4";

const MDLink = ({ node }) => (
    <div key={node.id}>
        <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: node.tableOfContents }} />
    </div>
);

const ListContentPages = ({ data }) => {
    const pages = data.allMarkdownRemark.edges;

    return (
        <div>
            <h1>Setlist</h1>

            {_.sortBy(pages, ({ node }) => node.fields.slug).map(MDLink)}
        </div>
    );
};

const Welcome = () => (
    <div>
        <h1>Hello new friend 👋</h1>

        <p>
            Welcome to Swizec's Intro to React & Redux Workshop. Today you will
            build your first webapp with React and Friends. {`<Tomorrow>`} you
            will build a more complex app that uses Redux for state management.
        </p>
        <p>
            Your 1st day starts at the very beginning:{" "}
            <em>
                Why React? What problem does it solve? What makes it tick?
                What's the ecosystem like? Why are components the future?
            </em>
        </p>
        <p>
            Your 2nd day starts with the idea that you magically remember
            everything and are now a pro. Don't worry if you're not, Swizec is
            here to help and he's going to code everything with you. If you get
            lost, sit back and observe. Checkout the example repo at key points
            so you can catch up.
        </p>
        <p>
            <big>
                <a href="http://tiny.cc/stubhub-slack">Join the Slack Group</a>
            </big>
            it's the best place for everyone to communicate offline
        </p>
        <p>By the end of the day you'll have built your first React app.</p>
        <p>Something like this 👇</p>

        <video
            src={MortysMindblowers}
            controls
            autoPlay
            mute="true"
            loop
            style={{ width: "100%" }}
        />

        <p>
            <a href="http://mortysmindblowers.fun">Morty's Mindblowers</a> shows
            an endless stream of gifs from Imgur's frontpage stitched together
            with cutscenes from a Rick & Morty episode where Morty discovers
            deleted memories.
        </p>
        <p>
            By the end of the 2nd day, you'll have built something like this👇
        </p>

        <video
            src={StubhubApp}
            controls
            autoPlay
            mute="true"
            loop
            style={{ width: "100%" }}
        />
        <p>
            A small StubHub app that lists event tickets from the StubHub API
            lets you add them to a shopping cart and "buy" them with a fake API
            call. It uses Redux to manage state, redux-form to manage forms, and
            React Router to help you hop around.
        </p>
    </div>
);

const WhoSwiz = () => (
    <div>
        <h2>Swizec Teller</h2>

        <a href="https://swizec.com">
            <img src={Swizec} title="Swizec at Write the Docs Prague in 2014" />
        </a>

        <p>I'm Swizec, I'll be helping you out today</p>
        <p>
            You can find out stuff about me if you ask Google. But generally
            speaking I've:
        </p>
        <ul>
            <li>been coding for over 20 years</li>
            <li>
                published{" "}
                <a href="http://nightowlsbook.com/">
                    Why Programmers Work at Night
                </a>, that was fun
            </li>
            <li>
                published{" "}
                <a href="https://www.packtpub.com/web-development/data-visualization-d3js">
                    Data Visualization with D3.js
                </a>, dare ask me about publishers
            </li>
            <li>
                published 3 editions of{" "}
                <a href="https://www.swizec.com/reactd3js/">React + D3</a>,
                that's been great
            </li>
            <li>helped over 10,000 people become better engineers</li>
            <li>
                made this{" "}
                <a href="https://es6cheatsheet.com">
                    interactive ES6 cheatsheet
                </a>
            </li>
        </ul>
    </div>
);

const Start = () => (
    <div>
        <h1>Let's get down to business</h1>
        <p>
            This is an interactive workshop. If you have a question, <b>ask</b>.
            If something doesn't make sense, <b>ask</b>. If something is
            confusing, <b>ask</b>. If I'm not making sense, <b>ask</b>. If your
            code doesn't work, <b>ask</b>.
        </p>
        <p>You will write code today. The code will live on your computer.</p>
        <p>We will take breaks.</p>
        <h2>But first ask yourself this: Why are you here?</h2>
        <p>
            Answering that question will help you get the most out of this
            workshop.
        </p>
        <p>
            Code you'll write today works with <b>React 16</b> and uses modern{" "}
            <b>ES6+</b>. We'll assume a development environment created with{" "}
            <code>create-react-app</code>. This gives us some special powers. I
            will point them out.
        </p>
    </div>
);

const ProjectLink = ({ url, children }) => (
    <li>
        <a href={url}>{children}</a>
    </li>
);

const CoolThings = () => (
    <div>
        <h1>Here are some cool things I've built with React</h1>

        <ul>
            <ProjectLink url="http://swizec.github.io/react-d3-enter-exit-transitions/">
                Animated typing
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/declarative-canvas-react-konva/">
                Canvas billiards game
            </ProjectLink>
            <ProjectLink url="http://swizec.github.io/react-particles-experiment/">
                Particle generator
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/react-fractals/">
                Pythagorean fractal tree
            </ProjectLink>
            <ProjectLink url="http://swizec.github.io/space-invaders/">
                Space Invaders
            </ProjectLink>
        </ul>

        <p>No, these projects are not practical, but they demo well :)</p>
    </div>
);

const IndexPage = ({ data }) => (
    <div>
        <img src={RandomOwl} title={`Literally first hit for "random image"`} />

        <Welcome />
        <WhoSwiz />
        <CoolThings />

        <Start />

        <p>Here's our the setlist for today 👇</p>

        <ListContentPages data={data} />

        <h1>Before you leave</h1>
        <p>Thank you for coming!</p>
        <p>
            Please fill out{" "}
            <a href="http://tiny.cc/stubhub-redux-feedback">
                this feedback form
            </a>. It helps me calibrate future workshops.
        </p>
        <p>Enjoy this video of Kiwi</p>
        <InstagramEmbed url="https://www.instagram.com/p/BR9xFYulmiL/" />
        <p>
            Cheers,<br />~ Swizec
        </p>
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
                    tableOfContents
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

export default IndexPage;
