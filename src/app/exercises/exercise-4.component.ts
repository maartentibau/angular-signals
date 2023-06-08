import {
  AfterViewInit,
  Component,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// 📜 Dominic the Document suggests looking at the ElementRef documentation:
// https://angular.io/api/core/ElementRef

// 🐨 Kody the Koala suggests creating a function named 'provideOnClickOutside'.
// This function should accept two parameters:
// 'elementRef' (a writable signal of type ElementRef or null) and
// 'handler' (a function that accepts an event of type Event and doesn't return anything).

// Inside the function:

// 🐨 Create an effect to handle a click outside.
// 💣 Berry the Bomb says you need to use the 'effect' function from Angular Signal for this.

// Inside the effect function, create a 'listener' function that accepts an 'event' of type Event.
// This function should do nothing if the event's target is contained within the 'nativeElement' property of 'elementRef'.
// If it isn't, it should call 'handler' with the 'event' as its argument.

// 🐨 Add the 'listener' function as an event listener for the 'mousedown' and 'touchstart' events on the document object.

// 💣 Berry the Bomb reminds you to remove these event listeners when the effect is cleaned up.

@Component({
  selector: 'app-exercice-4',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="toggleDropdown()">Toggle dropdown</button>
    <div #dropdown *ngIf="isDropdownOpen">Dropdown content...</div>
  `,
  styles: [``],
})
export class ExerciseComponent implements AfterViewInit {
  @ViewChild('dropdown') dropdownElementRef!: ElementRef;
  // we are waiting viewChild signal :)
  dropdownElementRefSignal = signal<ElementRef | null>(null);
  isDropdownOpen = true;

  constructor() {
    // 🐨 Invoke the provideOnClickOutside with dropdownElementRefSignal and close the dropdown
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngAfterViewInit(): void {
    this.dropdownElementRefSignal.set(this.dropdownElementRef);
  }
}
