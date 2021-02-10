---
title: "How to prevent derived state in React"
excerpt: "Today we will look at how to prevent derived state in React. Derived state is state that can be derived from an existing piece of state, or state which is derived from props."
image: "/blog/how-to--prevent-derived-state-react/introduction.jpg"
date: "2021-02-08T05:35:07.322Z"
author:
  name: Louis Young
  picture: "/blog/authors/louis.jpg"
  link: "https://www.louisyoung.co.uk"
ogImage:
  url: "/blog/how-to--prevent-derived-state-react/introduction.jpg"
---

Today we will look at how to prevent derived state in React.

## What is derived state?

Derived state is state that can be derived from an existing piece of state, or state which is derived from props.

## Examples

The chances are that if a value can be derived from an existing piece of state, it's probably not state (and shouldn't be stored as such).

A basic example is some state containing messages.

```js
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch messages from an API...
    const fetchedMessages = ["Hello", "World"];

    setMessages(fetchedMessages);
    setTotal(fetchedMessages.length);
  }, []);

  return (
    <h1>Messages ({total})</h1>

    // Render the list of messages...
  );
};
```

This is a form of derived state and should be avoided where possible. We shouldn't store the total amount of messages in state as it can be derived from messages (an existing piece of state). To prevent this, we would compute this value at render.

Let's see what that looks like:

```js
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from an API...
    const fetchedMessages = ["Hello", "World"];

    setMessages(fetchedMessages);
  }, []);

  return (
    <h1>Messages ({messages.length})</h1>

    // Render the list of messages...
  );
};
```

That's better. We are now calculating the total message count at render instead. This makes our code more clean and concise and prevents storing unnecessary derived state.

## Performance

If computing your value at render is expensive and is _actually_ causing performance issues, then consider memoization.

## Conclusion

Put simply, if you can compute a value from existing state, it probably isn't state and you should probably compute it at render instead.

Hopefully this you enjoyed article and it has helped to offer an alternate solution to deriving state.
