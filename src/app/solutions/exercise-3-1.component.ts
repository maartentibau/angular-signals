import {
  Component,
  effect,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

function provideKeyPress(targetKey: string): Signal<boolean> {
  const keyPressed = signal(false);

  effect((onCleanup) => {
    const downHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        keyPressed.set(true);
      }
    };

    const upHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        keyPressed.set(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Return the cleanup function directly
    onCleanup(() => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    });
  });

  return keyPressed.asReadonly();
}

@Component({
  selector: 'app-exercice-3-1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Press the "Enter" Key</h1>
      <p *ngIf="enterKeyPressed()">You pressed the "Enter" key!</p>
    </div>
  `,
  styles: [``],
})
export class ExerciseComponent {
  enterKeyPressed = provideKeyPress('Enter');
}
