# Angular Signa: KeyPress

In this exercise, you will be learning about handling key press events using Angular signals. The goal of this exercise is to create an Angular hook named `provideKeyPress`, that listens for a specific key press event and provides a signal indicating whether that specific key is currently pressed or not.

## Exercise 🐨

- Create a function `provideKeyPress` that takes a target key as an argument and returns a `Signal<boolean>`. This signal should emit `true` when the target key is pressed, and `false` when it's released.
- The function should add event listeners to the window object for 'keydown' and 'keyup' events, updating the state of the key press accordingly.

## Extra Challenges 💯

- Try to extend the functionality to track multiple keys. The signal should emit an array of all the keys currently being pressed.

## Best Practices 🦉

- Remember to always clean up side effects in your effects. This includes removing any event listeners that you've added.
