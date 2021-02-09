---
title: "Patterns to destructure props in React components"
excerpt: "Explore patterns to destructure props in React components. There are many approaches and this subject can be quite subjective, so make your own judgements as to what works for you and your team."
postImage: "/assets/blog/patterns-to-destructure-props-in-react-components/introduction.jpg"
date: "2021-02-09T05:35:07.322Z"
author:
  name: Louis Young
  picture: "/assets/blog/authors/louis.jpg"
  link: "https://www.louisyoung.co.uk"
ogImage:
  url: "/assets/blog/patterns-to-destructure-props-in-react-components/introduction.jpg"
---

Explore patterns to destructure props in React components. There are many approaches and this subject can be quite subjective, so make your own judgements as to what works for you and your team.

## Approaches

The three most common approaches we see when accessing props in React components are as follows:

1. [Destructuring in the component parameters](#destructuring-in-the-component-parameters)
2. [Destructuring in the component body](#destructuring-in-the-component-body)
3. [Directly accessing props](#directly-accessing-props)

<a name="destructuring-in-the-component-parameters"></a>

### Destructuring in the component parameters

Arguably the most common, and my preferred method, destructuring props in the component parameters is a clean, concise way to both get direct access to `props` without the verbosity of accessing via `props.property` (more on this later), and allows you to see at an overview what props a component should accept.

Here is an example of this pattern:

```js
const Component = ({ title }) => {
  return <p>{title}</p>;
};
```

As you can see, this is very clean, concise and exposes all of the props to be accessed directly. However, something that is often overlooked with this approach is that if you have a large component, it isn't always immediately obvious as to where the `title` variable originated from.

Take this as an example:

```js
const Component = ({ title }) => {
  // Lots of code here...

  // More variables declared within the component scope.
  const variable = "Hello World";

  return <p>{title}</p>;
};
```

That is a very small, stripped back example, but image this scaled up. If your component file is sizeable, you won't be able to see it's props when writing code within it. It isn't always clear at first sight where `title` came from.

Now, this isn't something I have personally found to be a challenge, and you can make your own judgement, but it's something to be aware of with this approach.

<a name="destructuring-in-the-component-body"></a>

### Destructuring in the component body

Less common, and not my preferred approach personally, is destructuring props within the component body. In my opinion this pattern is a little too verbose, and doesn't solve many of the downsides mentioned above but let's have a look at an example of this pattern:

```js
const Component = (props) => {
  const { title } = props;

  return <p>{title}</p>;
};
```

Again, this is a very small example. Let's remember that we can have multiple destructuring assignments within a component.

Take this as an example:

```js
const Component = (props) => {
  const { title } = props;

  // Destructure more props when we need them.
  const { values } = props;

  return <p>{title}</p>;
};
```

This pattern can definitely be useful, but weigh up the pros and cons of each approach and pick the best pattern for your circumstances.

<a name="directly-accessing-props"></a>

### Directly accessing props

One of the most common (and the default) way to access props in React is just to directly access them through the `props` object. I personally don't use this approach, as for most situations I prefer the first example.

Here's an example:

```js
const Component = (props) => {
  return <p>{props.title}</p>;
};
```

You could consider this as a happy medium between the two aforementioned patterns. This is your decision to make, but let's discuss a few pros and cons.

It isn't immediately obvious what props this component can/should accept. Yes this can be solved with TypeScript, but that isn't what this article is supposed to address.

Some would consider this approach a little verbose, having to repeat `props.` every time you want to access a prop. Now, this is highly contrived and you'll have your own views on this.

On the contrary, accessing via `props.` clearly indicates where the title in the above example originated from.

### Conclusion

We've talked about a few of the most common patterns for destructuring props in React components, and have discussed why they can be good, bad, and some of the potential gotchas of each approach.

Hopefully you found this article insightful and I hope it helps you choose a pattern for your next project!
