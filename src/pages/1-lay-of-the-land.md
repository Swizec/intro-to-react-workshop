---
title: "Lay of the React Land"
---

# React's biggest innovation

I like to say React is the biggest revolution in writing code for browsers since jQuery. You probably don't remember what life was like before jQuery. It was bad.

Before jQuery we spent a lot of time worrying about the DOM and how to talk to it. Each browser was different and you had to take that into account.

jQuery solved that.

Then webapps became bigger and more complex. jQuery code started to look like spaghetti. You couldn't tell the difference between code that's worrying about *how* to render something and code that's deciding *what* to render.

Backbone helped but it was cumbersome and awkward. Been using it professionally since before version 1 ... 0.6, I think. If you're still using Backbone and you're struggling, I share your pain. My day job is 80% Backbone.

Angular wasn't much better. 

## Enter React, stage left

And then there was React. In my opinion the best thing that's happened to the web in the past 10 years.

React's big innovation is that it solves our most painful problem 👇

> How to achieve good rendering performance without ever thinking about how things are rendered

Unlike jQuery or Backbone or even Angular, React uses something called the virtual DOM. An in-memory presentation of your document that it can play with *before* rendering the page. 

![](../images/diffing-algorithms.png)

As a result, React triggers repaints and reflows only when it needs to. Your changes are batched and committed to the page when necessary.

And because React uses an advanced tree diffing algorithm, it can avoid re-rendering elements that didn't change. The fewer repaints, the faster the webapp.

A lot of heavy research has gone into tree diffing algorithms over the years (decades). You don't want to reinvent all of that every time your Backbone View has a child View. 😉

# Components are the future

Now I don't know what React is going to look like 10 years from now, or if we're still going to use React, but I can tell you one thing

> The component is here to stay

Think about how you build user interfaces. You're probably concerned about separation of concerns, right?

And just like I used to, you like to think of separation of concerns in terms of technology:

- JS for behavior
- CSS for styling 
- HTML for structure

You dream of the day when a designer will write your HTML and your CSS so you can focus on the *real* code – JavaScript.

Yet the day never comes. You keep writing all of it, they keep being tightly coupled, and you're just annoyed that you have to build your stuff in a bazillion different files.

It turns out "separation of concerns" in UI is more about separation of usecase than technology.

![](../images/separation-of-concerns.png)

A button is always a button, a date picker is a date picker. Your UI is a series of components most of which you can develop separately and reuse over and over again.

# A gentle introduction to JSX

Where React truly shines is that it makes components practical.

With JSX – JavaScript eXtension – HTML becomes a first-class citizen in your code. You can, for example, assign a chunk of HTML to a variable.

```jsx
const chunk = <div>
	<h1>Hello world</h1>
	<p>I'm a paragraph</p>
</div>
```

Behind the scenes JSX compiles into a series of `createElement` function calls. Our `chunk` turns into something like this:

```jsx
const chunk = createElement('div', [
	createElement('h1', "Hello world"),
	createElement('p', "I'm a paragraph")
]);
```

I find JSX a lot easier to read. You can look at my code and see that it's a div with a title and a paragraph.

> If you can read HTML, you can read JSX.

Here's where it gets interesting. Now that we have a `chunk` of HTML, we can use it in other HTML.

```jsx
<div>
	{chunk}
	<p>I am another paragraph</p>
</div>
```

With JSX, you can put any JavaScript expression in `{}`. It evaluates and puts the result in your HTML.

You can even do it in props!

```jsx
// this works too
<div>
	<h1 id={getSlug()}>{getTitle()}</h1>
	{getContent()}
</div>
```

And you can define custom elements.

```jsx
const Article = () => (
	<div>
		<h1 id={getSlug()}>{getTitle()}</h1>
		{getContent()}
	</div>
);
```

That's actually a React functional stateless component. You can use it like any other HTML element. Don't worry about the details right now, we'll talk more about components in the next section.

Here's how you render a component:

```jsx
<div>
	<Article />
	<Article />
</div>
```

HTML elements are lower case, React components must start with a capital. That's how you tell them apart.

As you'll see in future sections, bringing HTML into JavaScript is powerful. You get all the benefits and power of JavaScript combined with the declarative nature and readability of HTML. 👌

# Modern build tools

## Start with create-react-app

## Webpack

## Babel

# React ecosystem

## Component styling

## Routing

## Data management