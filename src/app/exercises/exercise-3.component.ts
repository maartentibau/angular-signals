import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// 🐨 Implement the `provideWindowSize` function
export function provideWindowSize() {
  // 🐨Initialize the signal with undefined width/height so we can update these later
  // 💰 const windowSize = signal<Size>({ width: undefined, height: undefined });
  // 🐨 Create an effect to handle window resize events
  // 🐨 Handler to call on window resize
  // 💰 Set window width/height to signal
  // 🐨 Add event listener
  // 💰 window.addEventListener('resize', handleResize);
  // Call handler right away so state gets updated with initial window size
  // 💰 handleResize();
  // 🐨 Remove event listener on cleanup
  // 🚨 Don't forget to handle the error in the console
  // 🐨 Return the signal
}
@Component({
  selector: 'app-exercise-3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Window size:</h2>
      <p>Width: {{ windowSize().width }}px</p>
      <p>Height: {{ windowSize().height }}px</p>
    </div>
  `,
  styles: [``],
})
export class ExerciseComponent {
  // Replace me with provideWindowSize()
  windowSize = signal({ width: 0, height: 0 });
}
