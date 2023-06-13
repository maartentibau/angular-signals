import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  // 🐨 return the object {storedValue, setValue}
}

@Component({
  selector: 'app-exercise-2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User Preferences</h2>
    <div>
      <label for="theme-select">Preferred Theme:</label>
      <p>
        Replace the TODO in the template by the 'storedValue' in the
        localStorage
      </p>
      <select
        id="theme-select"
        #selectElement
        [value]="'TODO'"
        (change)="updateTheme(selectElement.value)"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  `,
  styles: [``],
})
export class Exercise2Component {
  updateTheme(value: string) {
    // setValue in the localStorage using the signal
  }
}
