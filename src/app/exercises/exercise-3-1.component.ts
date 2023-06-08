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

function provideKeyPress(targetKey: string) {
  // 1. 🐨 Create a signal 'keyPressed' that will store the state of the target key.
  //    Initialize it with 'false' indicating that the key is not pressed initially.
  // 2. 🐨 Create an effect to listen for 'keydown' and 'keyup' events.
  // 3. 🐨 Inside the effect, create a 'downHandler' function for 'keydown' event.
  //    This function should check if the key pressed matches the target key,
  //    and if so, it should update 'keyPressed' signal to 'true'.
  // 4. 🐨 Similarly, create a 'upHandler' function for 'keyup' event.
  //    This function should check if the key released matches the target key,
  //    and if so, it should update 'keyPressed' signal to 'false'.
  // 5. 🐨 Add 'keydown' and 'keyup' event listeners to the window object,
  //    and assign the respective handler functions.
  // 6. 🐨 Return a cleanup function that removes the event listeners.
  //    This will be called when the effect is cleaned up.
  // 6. 🐨 Remove the event listeners here
  // 7. Return the readonly version of the 'keyPressed' signal.
}

@Component({
  selector: 'app-exercice-3-1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Press the "Enter" Key</h1>
      <p *ngIf="enterKeyPressed">You pressed the "Enter" key!</p>
    </div>
  `,
  styles: [``],
})
export class ExerciseComponent {
  // Init enterKeyPressed with provideKeyPress to track the press on "Enter"
  enterKeyPressed = signal(false);
}
