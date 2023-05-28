# Angular Signal-rendered Local Storage Hook

## 📝 Your Notes

Elaborate on your learnings here in `exercises/exercice-2.component.md`

## Background

In most web applications, it is often necessary to persist some data across sessions. This could be user preferences, or even the application's state for continuity. 
One common way of achieving this in web development is through the use of Local Storage, a web API that allows you to store data persistently in a user's browser.

In Angular, one common way to interact with Local Storage is via services, but with the introduction of Angular Signals, we now have an alternative way to create a custom Hook that handles interaction with Local Storage.

```ts
import { signal, computed, effect } from '@angular/signal';

// 🐨 create a function provideLocalStorage. It takes key (string) and initialValue (generic T) as parameters
// 💰 This function will return an object where the first item is a signal and the second is a computed signal

export function provideLocalStorage<T>(key: string, initialValue: T) {
  // 🐨 create a signal for our stored value
  // 💰 Use the signal() function from Angular Signal
  // 💰 This signal should return the value from Local Storage (use window.localStorage.getItem())
  // 💰 If there's no value in Local Storage, it should return the initialValue
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  // 🐨 create a computed signal for our setter function
  // 💰 Use the computed() function from Angular Signal
  // 💰 This computed signal should return a function that accepts a value (generic T or a function that returns T)
  // 💰 This function should update the storedValue signal and update the value in Local Storage

  // 🐨 create an effect to persist the value in Local Storage whenever it changes
  // 💰 Use the effect() function from Angular Signal
  // 💰 This effect should run whenever the storedValue signal changes
  // 💰 It should update the value in Local Storage whenever it runs

  // 🐨 return the object {storedValue, setValue} , storedValue should be "asReadonly"
}
```

This hook gives us a reactive way to interact with Local Storage. By calling this function and providing a key and an initial value, we can create a Signal to represent a value stored in Local Storage, as well as a Signal for a setter function to update that value. These Signals can be used elsewhere in the application for a reactive way to interact with Local Storage data.

## Exercise


Your task is to create the `provideLocalStorage` function. This function should return an object where the first item is a signal `storedValue`, and the second is a computed signal `setValue`. You should be able to call these as functions to get their value or set their value.

The `storedValue` signal should return the value in Local Storage for the provided key, or the `initialValue` if there is none.

The `setValue` computed signal should return a function that can update the value of `storedValue` and persist that change to Local Storage.

Use `effect` to ensure that any changes to `storedValue` are immediately persisted to Local Storage.

## Extra Credit

### 1. 💯 Handle errors


Improve your `provideLocalStorage` function to handle any errors that may occur during the interaction with Local Storage. This might be due to the user disabling Local Storage or Local Storage being full.

## 🦉 Feedback

Fill out
