---
title: "Your First Component"
---

To learn about React components, we're going to build a fractal tree. One component repeated 2048 times.

![](../images/fractal-tree.gif)

I'll build it with you from scratch. You can see a [working version on Github](https://swizec.github.io/react-fractals/)

# Two flavors of components

React components come in two flavors:

- class components
- functional stateless

A title component might look like this 👇

```jsx
class Title extends Component {
	render() {
		return <h1>{this.props.title}</h1>
	}
}

ReactDOM.render(<Title title="Hello world" />, document.getElementById('root'))
```

Class components get all of React's features:

- they have props
- there's state
- lifecycle hooks work

But writing all of that gets tedious, if all you want is to render a few elements. So you can use functional stateless components instead 👇

```jsx
const Title = ({ title }) => <h1>{title}</h1>;

ReactDOM.render(<Title title="Hello world" />, document.getElementById('root'))
```

Same result, a lot less typing.

Stateless components keep props, but lose state and lifecycle hooks. In return they have smaller overhead and are quicker to write.

## Component children

Using our `Title` component is kind of tedious. We can make it better with React's magic `children` prop.

```jsx
const Title = ({ children }) => <h1>{children}</h1>;

ReactDOM.render(<Title>Hello world</Title>, document.getElementById('root'))
```

We're still saying `Title` twice, but this way feels more natural. 

Component children are passed into every component as props. You can do with them as you please.

Components behave just like custom HTML elements. You can nest them, you can pass them around, you can do whatever you want.

## Practical exercise

Go into the project you created with `create-react-app` in the last section and move header stuff into a new component. 

# State, Props, and Unidirectional data flow

When you're building apps with React, you want to make sure information always flows in one direction. You should always have a single source of truth, which sends information down to components via props, and accepts updates through callbacks or global actions.

More on that later.

For now just keep in mind that your component should always be able to render itself from props. Avoid relying on state whenever possible.

![](../images/unidirectional.png)

When you *do* need state, you should drive it through React's built-in state management (or Redux/MobX, but that's next week).

> You can think of state as props that change over time. 

You drive the change through calling `this.setState` on your class-based component.

[example]

Calling `setState` updates the component's `this.state` object and triggers a re-render. Yes, you re-render on every state change. That's the beauty of React.

## Practical exercise – props

[props exercise]

## Practical exercise – state

[state exercise]

# Lifecycle hooks

One of my favorite features of React's class-based components are their lifecycle hooks. You can think of them as callbacks for key events in a components lifecycle.

Is that a bad pun? 😇

## Creating a component

* constructor()
* componentWillMount()
* render()
* componentDidMount()

## Updating a component

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()

## Removing a component

* componentWillUnmount()

The best way to explain these is through a diagram and lots of hand waving.

If you get video of my explanation, we can try to insert it here for posterity. Make a PR!

# Component styling

It's time to make our dancing tree beautiful. We have a couple of options 👇

1. **CSS**, React components are just HTML, you can use CSS the same way you always have
2. **style prop**, great for one-off style definitions
2. **CSS modules**, use CSS files, apply classes with the `styleName` prop
3. **styled components**, create styled versions of common components

Let's try all four and see which one you like best.

## CSS

```css
rect {
	fill: lightblue;
}
```

## style prop

```css
import { interpolateViridis } from 'd3-scale';
<rect style={{fill: interpolateViridis(lvl/maxlvl)}} />
```

👆 great for giving each rectangle a different color

## CSS modules

```css
.rect {
	fill: #ffb6c1 
}
```

```jsx
import CSSModules from 'react-css-modules';
import styles from './index.css';

<rect styleName="rect"
```

## Styled components

```jsx
import styled from 'styled-components';
const Rect = styled.rect`
	fill: lightseagreen;
`

<Rect ... />
```

As far as I can tell there is no consensus about which is best. They all come with a different set of tradeoffs.