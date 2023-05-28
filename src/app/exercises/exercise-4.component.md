# Angular Signal: Click Outside

## 📝 Your Notes

Elaborate on your learnings here in `src/exercise/03.md`

## Background

Clicking outside an element is a common UI pattern for closing modal and dropdown components. Detecting whether a user has clicked outside an element is not straightforward with basic event listeners, since we have to determine whether the click event happened outside of the given element.

This is where the Angular Signal library comes in handy, as it allows us to easily create a reusable hook to handle outside clicks.

## Exercise

The goal of this exercise is to write a function `provideOnClickOutside` which takes an `ElementRef` and a `handler` function as parameters. This function should create an effect that adds click event listeners to the document which trigger the `handler` function if the click occurred outside the `ElementRef`.

