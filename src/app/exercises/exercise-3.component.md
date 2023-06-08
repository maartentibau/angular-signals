# Angular Signal: Window Size

## Background

In JavaScript, we can listen for window resize events using the `resize` event. This can be useful for creating responsive behaviors that depend on the size of the viewport. For example, we might want to display different layouts depending on whether the viewport is wide enough to accommodate a desktop layout or not.

```javascript
window.addEventListener('resize', function(event) {
  // handle the resize event
});
```

However, this approach can become unwieldy as our application grows in complexity. We would need to ensure that we remove our event listeners when they're no longer needed to avoid memory leaks. Additionally, we would need to manage state across potentially multiple components that need to know about the window size.

This is where Angular Signal comes in. We can encapsulate the logic for listening to window resize events and maintaining the current window size in a custom function. This function can then be used across our application, ensuring that we have a single source of truth for the window size.

## Exercise

It's important to have a basic understanding of how to create and use custom functions in Angular Signal. In this exercise, we're going to create a `provideWindowSize` function that listens for window resize events and maintains the current window size.

This function should return an object with `width` and `height` properties, which represent the current width and height of the window, respectively.

## Extra Credit

### 1. 💯 Untrack the signal

In some cases, you may want to consume a signal without causing the consumer to react when the signal changes. For this, Angular Signal provides the `untracked` function. Try using it in your `provideWindowSize` function.

## 🦉 Feedback

Fill out the feedback form on your learnings and progress.
