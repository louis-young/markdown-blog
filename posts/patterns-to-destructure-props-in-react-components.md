---
title: "Patterns to destructure props in React components"
excerpt: "Today, we will explore various patterns used to destructure props in React components. Props (short for properties) are immutable properties that are passed down through React components from parent to child."
image: "/blog/patterns-to-destructure-props-in-react-components/introduction.jpg"
date: "2021-02-09T05:35:07.322Z"
author:
  name: Louis Young
  picture: "/blog/authors/louis.jpg"
  link: "https://www.louisyoung.co.uk"
---

Today, we will explore various patterns used to destructure props in React components.

This article assumes that you're using functional components. If you aren't, a lot of what we're about to talk about isn't applicable due to how props are inherited by class components.

There are many approaches and this topic can be quite subjective, so make your own judgements as to what works for you and your team.

## What are props?

Props (short for properties) are immutable properties that are passed down through React components from parent to child. They are key to React and it's unidirectional data flow.

## Patterns

The three most common patterns we see when accessing props in React components are as follows:

1. [Destructuring in the component parameters](#destructuring-in-the-component-parameters)
2. [Destructuring in the component body](#destructuring-in-the-component-body)
3. [Directly accessing props](#directly-accessing-props)

<a name="destructuring-in-the-component-parameters"></a>

### Destructuring in the component parameters

Arguably the most common (and my preferred method), destructuring props in the component parameters is a clean and concise way to both get direct access to `props` without the verbosity of accessing the properties via `props.property` (more on this later) and allows you to see at an overview what props a component should accept.

Here is an example of this pattern:

```js
const Component = ({ title }) => {
  return <p>{title}</p>;
};
```

As you can see, this is very clean and concise and it exposes all of the props to be referenced directly. However, something that is often overlooked with this approach is that if you have a large component, it isn't always immediately obvious as to where the `title` variable originated from.

Take this as an example:

```js
const Component = ({ title }) => {
  // Lots of code here...

  // More variables declared within the component scope.
  const variable = "Hello World";

  return <p>{title}</p>;
};
```

That is a very small example, but image this scaled up. If your component file is sizeable, you might not always be able to see it's props when writing code within it. It isn't always clear at first glance where `title` originated from.

Now, this isn't something I have personally found to be a challenge and you can make your own judgement, but it is something to be aware of with this approach.

A common mistake when destructuring using this approach is to miss the object notation in the parenthesis. Here's an example of what _not_ to do.

```js
const Component = (title) => ... // Note that we are missing the {} here.
```

<a name="destructuring-in-the-component-body"></a>

### Destructuring in the component body

Less common (and not my preferred approach) is destructuring props within the component body. In my opinion this pattern is a little too verbose and doesn't solve many of the pitfalls mentioned above, but let's have a look at an example of this pattern:

```js
const Component = (props) => {
  const { title } = props;

  return <p>{title}</p>;
};
```

Again, this is a very small example; let's remember that we can have multiple destructuring assignments within a component.

Take this as an example:

```js
const Component = (props) => {
  const { title } = props;

  // Destructure more props when we need them.
  const { values } = props;

  return <p>{title}</p>;
};
```

This pattern can definitely be useful, but weigh up the pros and cons of each approach and pick the best pattern for your application.

<a name="directly-accessing-props"></a>

### Directly accessing props

If you don't like any of the above, then consider not destructuring. One of the most common ways to access props in React is to access them directly.

Here's an example of accessing props directly:

```js
const Component = (props) => {
  return <p>{props.title}</p>;
};
```

At first glance, it isn't immediately obvious what props are passed down to this component.

Some would consider this approach too verbose as you have to repeat `props.` every time you want to access a prop. This is highly contrived and you can make your own decision, but personally it's a no-issue for me.

Following on from the above, accessing properties via `props.` clearly indicates where the title in the above example originated from.

## Something to think about

Something to think about when using object destructuring to access props is that every time you pass a new prop to a component, you need to add the new prop to your destructuring assignment. This is also true when modifying the key (name) of an existing prop.

This can lead to you trying to access props in your component when they aren't defined. This is very quickly picked up in development by linters and I haven't found it to be a problem, but it's something to bear in mind.

## Conclusion

We've talked about a few of the most common patterns for destructuring props in React components, and have discussed why they can be good, bad, and some of the potential pitfalls of each approach.

Hopefully you found this article insightful and I hope it helps you choose a pattern for your next project!
