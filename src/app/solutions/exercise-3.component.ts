import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Size {
  width: number | undefined;
  height: number | undefined;
}

function provideWindowSize() {
  // Initialize state with undefined width/height
  const windowSize = signal<Size>({ width: undefined, height: undefined });

  // Create an effect to handle window resize
  effect(
    (onCleanup) => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to signal
        windowSize.set({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      onCleanup(() => window.removeEventListener('resize', handleResize));
    },
    { allowSignalWrites: true }
  );

  // Return the signal
  return windowSize;
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
  windowSize = provideWindowSize();
}
