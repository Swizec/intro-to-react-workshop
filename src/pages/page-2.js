import React from 'react'
import Link from 'gatsby-link'

const List = () => <ul>
    <li>Hello</li>
    <li>This is a list</li>
</ul>;

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <List />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
