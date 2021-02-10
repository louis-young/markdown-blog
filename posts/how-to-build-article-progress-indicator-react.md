---
title: "How to build an article progress indicator in React"
excerpt: "Today we are going to build an article progress indicator, also known as a reading position indicator. These can be useful to allow readers to easily visualise the length of an article, and see their reading progress."
image: "/blog/how-to-build-article-progress-indicator-react/introduction.jpg"
date: "2021-02-10T05:35:07.322Z"
author:
  name: Louis Young
  picture: "/blog/authors/louis.jpg"
  link: "https://www.louisyoung.co.uk"
ogImage:
  url: "/blog/how-to-build-article-progress-indicator-react/introduction.jpg"
---

Today we are going to build an article progress indicator, also known as a reading position indicator. These can be useful to allow readers to easily visualise the length of an article, and see their reading progress (more on this later).

## What is an article progress indicator?

There are many different implementations but the most common is a slim bar along the top of the page (as you can see above on my site).

## Why use an article progress indicator?

There are a few different uses for an article progress indicator, primarily giving users an easy visualisation of the length of an article, and their reading progress. They are also a cool little feature which doesn't take long to build.

However, the use of such progress indicators is highly contrived. Arguments against include potential confusion with websites such as YouTube that use a similar looking progress bar to indicating loading progress, and the fact that a native scrollbar serves the same purpose as a reading indicator.

Use your own judgement here and decide whether or not to implement one on your site.

## Let's get started

### Component and state

Let's start by creating a new component called `Progress` and returning a native `progress` element.

```js
const Progress = () => {
  return <progress />;
};
```

Great, now let's add a `progress` state to our component and initialise it's value to `0`.

```js
import { useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  return <progress />;
};
```

Note: Remember to import `useState` if you haven't already.

Awesome. The native `progress` element has two attributes we're going to use in this tutorial.

`value` which is the current progress value (our `progress` state value).
`max` which is the maximum progress value (100 in our case as we're using a percentage).

Let's add those to our `progress` element.

```js
<progress value={progress} max="100" />
```

Next we will make our progress indicator work.

### Effects

Let's create an effect using `useEffect` with an empty dependency array which will run when our component mounts.

```js
useEffect(() => {
  // ...
}, []);
```

Note: Remember to import `useEffect` if you haven't already.

Now, let's create a function within our effect called `calculatePercentage` which will calculate our progress percentage.

```js
useEffect(() => {
  const calculatePercentage = () => {
    // ...
  };
}, []);
```

### Events

We'll also bind a scroll event to the window, and call our `calculatePercentage` function which we just defined.

```js
useEffect(() => {
  const calculatePercentage = () => {
    // ...
  };

  window.addEventListener("scroll", calculatePercentage);
  return () => {
    window.removeEventListener("scroll", calculatePercentage);
  };
}, []);
```

Let's step through this code a little.

1. We define our `calculatePercentage` function within our effect.
2. When our effect runs (on component mount), we bind a scroll event to the window.
3. When our component unmounts, the cleanup function runs (which is what we return from our effect), which removes our event listener.

Great, now let's add the business logic to our `calculatePercentage` function.

### Functionality

```js
const calculatePercentage = () => {
  const scrolled = window.scrollY;

  const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
};
```

1. We've declared a variable called `scrolled` which references how far we've scrolled on the Y axis within the window.
2. We've declared a variable called `total` which references the total height of the document (`scrollHeight`) minus the window height (`clientHeight`).

Now, our `total` variable is the maximum scrollable distance of our page. This means that we can easily work out our progress percentage by dividing how far we've scrolled by our total scrollable distance and multiplying it by 100.

Finally, we will store this percentage in our `progress` state.

```js
const calculatePercentage = () => {
  const scrolled = window.scrollY;

  const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const percentage = (scrolled / total) * 100;

  setProgress(percentage);
};
```

Now you have a functional article progress indicator within your React application. Your final component should look like this:

```js
import { useEffect, useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      const scrolled = window.scrollY;

      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const percentage = (scrolled / total) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", calculatePercentage);
    return () => {
      window.removeEventListener("scroll", calculatePercentage);
    };
  }, []);

  return <progress value={progress} max="100" />;
};
```

### Styling

Let's style our component to make it look a little nicer.

```css
progress {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.5rem;
  appearance: none;
  border: none;
  background-color: transparent;
  color: black;
}

progress::-webkit-progress-bar {
  background-color: transparent;
}

progress::-webkit-progress-value {
  background-color: black;
}

progress::-moz-progress-bar {
  background-color: black;
}
```

We disable the native `progress` element styles, and give it our own. Feel free to customise values such as the height and colour to your preference.

Now simply render your component and admire your hard work!

## Conclusion

We've learnt how to build an article progress indicator in React, utilising the `useState` and `useEffect` hooks.

Hopefully you found this article insightful and you enjoy the fruits of your labour.
