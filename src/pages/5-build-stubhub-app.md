---
title: "Build a StubHub App"
---

We're building the StubHub app we talked about earlier. List events, show them, filter them, make a checkout form. It's going to be great.

This page serves as an outline of how we're going to approach it. You can think of it as a more structured version of the commit history on my [example app repository](https://github.com/Swizec/redux-workshop-example-app).

As we go along, I'm going to put code in [this repository](https://github.com/Swizec/stubhub-workshop-code-boston-day-2). Each step is going to have its own set of commits.

Here's the general plan 👇

1. Swizec explains what we're going to do
2. Swizec codes a part of it and makes a commit
3. You fill in the blanks
4. Swizec shows you how to fill in the blanks

We'll use the original example repo as guidance so we don't spend too much time in the weeds.

# Clone the starter repo 

Your journey begins with [the starter repo](https://github.com/Swizec/stubhub-workshop-code-boston-day-2).

```
$ git clone https://github.com/Swizec/stubhub-workshop-code-boston-day-2
$ cd redux-workshop-starter-repo
$ npm install
```

This gives you a project set up with `create-react-app` with everything you need to work on this project

- all dependencies
- an `Api` class that talks to StubHub
- StubHub auth set up with my tokens
- all files stubbed with
	- their imports
	- styled components
- routing setup
- redux store setup

In theory you should be able to focus just on React and Redux fundamentals and not have to worry about any boilerplate. You might have to comment out some imports until we implement them.

The following is an outline. If you're reading this post-facto, you can look at the [Day-of code repository](https://github.com/Swizec/stubhub-workshop-code-boston-day-2)'s commit history. It should closely reflect this outline.

# List events from StubHub

## Create an events reducer

## Create a fetch thunk

## Build an Event component

## Build an EventList component

# Filter with Downshift

## Build a SearchableEventList component

# Add items to shopping cart

## Create a shoppingCart reducer

## Create an action to add to shopping cart

# Re-use EventList component to show shopping cart

## Build a RemovableEvent component

## Create an action to remove from cart

# Build a checkout form with redux-form

## Build a Form component

## Form validation

## Submit, save, and post submit page

# Server-side render the initial list

## Copy Expressjs setup

## React.hydrate

