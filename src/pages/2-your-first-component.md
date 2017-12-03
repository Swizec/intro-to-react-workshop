---
title: "Your First Component"
---

To learn about React components, we're going to build the first part of our static ticket list app – the individual ticket.

![](../images/day-1-example.gif)

We're going to do a code-along. 👇

1. Swizec explains what we're going to do
2. Swizec codes a part of it and makes a commit
3. You fill in the blanks
4. Swizec shows you how to fill in the blanks 

You can see the finished app [on Github](https://github.com/Swizec/react-workshop-example-day-1).

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

[Try on Codepen](codepen://your-first-component/class-component)

Class components get all of React's features:

- they have props
- there's state
- lifecycle hooks work

But writing all of that gets tedious, if all you want is to render a few elements. So you can use functional stateless components instead 👇

```jsx
const Title = ({ title }) => <h1>{title}</h1>;

ReactDOM.render(<Title title="Hello world" />, document.getElementById('root'))
```

[Try on Codepen](codepen://your-first-component/functional-component)

Same result, a lot less typing.

Stateless components keep props, but lose state and lifecycle hooks. In return they have smaller overhead and are quicker to write.

## Component children

Using our `Title` component is kind of tedious. We can make it better with React's magic `children` prop.

```jsx
const Title = ({ children }) => <h1>{children}</h1>;

ReactDOM.render(<Title>Hello world</Title>, document.getElementById('root'))
```

[Try on Codepen](codepen://your-first-component/children.js)

We're still saying `Title` twice, but this way feels more natural. 

Component children are passed into every component as props. You can do with them as you please.

Components behave just like custom HTML elements. You can nest them, you can pass them around, you can do whatever you want.

## Fragments

React 16 introduced fragments – components that render children, but take themselves out of the DOM. Before React 16, we often had to wrap elements in unnecessary `<div>`s that made final markup look convoluted.

With Fragments, we can now return arrays of components. The actual `<React.Fragment /≥` component makes returning an array more idiomatic. 

```jsx
const DecayOfLying = () => (
 <React.Fragment>
		<p>If Nature had been comfortable, mankind would never have invented architecture...In a house, we all feel of the proper proportions. Everything is subordinated to us, fashioned for our use and our pleasure.</p>
		<p>It is always the unreadable that occurs.</p>
		<p>His style is chaos illumined by flashes of lightning.</p>
		<p>A reference to George Meredith's style.</p>
		<p>Life imitates art far more than art imitates Life.</p>
		<p>No great artist ever sees things as they really are. If he did, he would cease to be an artist.</p>
		<p>The final revelation is that Lying, the telling of beautiful untrue things, is the proper aim of Art.</p>
	</React.Fragment>
);
```

[Try on Codepen](codepen://your-first-component/fragments)

React 16.2 introduced the new `<> ... </>` syntax, which is easier to type. However it is not yet supported by large parts of the ecosystem.

## Practical exercise

Build a placeholder `<Ticket />` component.

# State, Props, and Unidirectional data flow

When you're building apps with React, you want to make sure information always flows in one direction. You should always have a single source of truth, which sends information down to components via props, and accepts updates through callbacks or global actions.

More on that later.

For now just keep in mind that your component should always be able to render itself from props. Avoid relying on state whenever possible.

![](../images/unidirectional.png)

When you *do* need state, you should drive it through React's built-in state management (or Redux/MobX, but that's next week).

> You can think of state as props that change over time. 

You drive the change through calling `this.setState` on your class-based component.

```jsx
class Counter extends React.Component {
	constructor() {
		super();
		
		this.state = {
			N: 0
		}
	}
	
	onClick() {
		this.setState({
			N: this.state.N + 1
		});
	}
	
	render() {
		return (
			<button onClick={this.onClick.bind(this)}>{this.state.N}</button>
		)
	}
}
```

[Try on Codepen](codepen://your-first-component/state.js)

Calling `setState` updates the component's `this.state` object and triggers a re-render. Yes, you re-render on every state change. That's the beauty of React.

## Practical exercise – props

Use real data in your `<Ticket />` component.

## Practical exercise – state

Build a list of Ticket components that you can expand.

# Lifecycle hooks

One of my favorite features of React's class-based components are their lifecycle hooks. You can think of them as callbacks for key events in a components lifecycle.


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

[draw diagram on whiteboard]

# Component styling

It's time to make our list of tickets. We have a couple of options 👇

1. **CSS**, React components are just HTML, you can use CSS the same way you always have
2. **style prop**, great for one-off style definitions
2. **CSS modules**, use CSS files, apply classes with the `styleName` prop
3. **styled components**, create styled versions of common components

I'll explain all four, then we'll use styled components because I think they're the best compromise between ease of use and transferable skills from the old times.

## CSS

```css
div {
	background: pink;
}
```

## style prop

```jsx
<div style={{background: 'pink'}} />
```

👆 great for giving each rectangle a different color

## CSS modules

```css
.bg-pink {
	background: pink;
}
```

```jsx
import CSSModules from 'react-css-modules';
import styles from './index.css';

<div styleName="bg-pink"
```

## Styled components

```jsx
import styled from 'styled-components';
const Div = styled.div`
	background: pink;
`

<Div ... />
```

Personally I like styled components and I often use the `style` prop for one-off styling. The community doesn't seem to have reached consensus on which approach is best.