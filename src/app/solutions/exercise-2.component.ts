import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export function provideLocalStorage<T>(key: string, initialValue: T) {
  // Create a signal for our stored value
  const storedValue = signal<T>(
    (() => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    })()
  );

  // Create a signal for our setter function
  const setValue = computed(() => {
    return (value: T | ((val: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue()) : value;
        storedValue.set(valueToStore);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.log(error);
      }
    };
  });

  // Create an effect to persist the value to localStorage whenever it changes
  effect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(storedValue()));
    }
  });

  return { storedValue: storedValue.asReadonly(), setValue: setValue() };
}

@Component({
  selector: 'app-exercice-2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User Preferences</h2>
    <div>
      <label for="theme-select">Preferred Theme:</label>
      <select
        id="theme-select"
        #selectElement
        [value]="themeStorage.storedValue()"
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
  themeStorage = provideLocalStorage('theme', 'light');

  updateTheme(value: string) {
    this.themeStorage.setValue(value || '');
  }
}
