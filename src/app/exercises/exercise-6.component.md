# Angular Signal:  Debounce

In this exercise, you are going to learn how to implement a custom debounce function using Angular Signal.

## Problem Statement

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, which can lead to performance problems.

Let's consider an input field. We want to be able to fetch some data based on what the user types into this field, but we don't want to fire a request for every keystroke — instead, we want to wait until the user has stopped typing and then send the request. This is a classic use case for debouncing.

Your task is to implement a function called `provideDebounce` using Angular Signal. The function should return a debounced value which updates after a given delay.

## Exercise Instructions

1. 🐨 Create a function `provideDebounce`. The function should accept a generic value and a delay in milliseconds.

2. 🐨 Inside `provideDebounce`, create a signal `debouncedValue` using the initial value.

3. 🐨 Define a variable `timeoutId` that will store a reference to the setTimeout instance.

4. 🐨 Inside an `effect` block, check if `timeoutId` is defined and clear the timeout if it is.

5. 🐨 In the same `effect` block, set `timeoutId` to a new `setTimeout` which updates the `debouncedValue` after the delay.

6. 🐨 Finally, the `onCleanup` function should clear the `timeoutId`.

