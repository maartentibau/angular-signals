import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  untracked,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

function provideOnClickOutside(
  elementRef: WritableSignal<ElementRef | null>,
  handler: (event: Event) => void
) {
  // Create an effect to handle click outside
  effect((onCleanup) => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (elementRef()?.nativeElement.contains(event.target)) {
        return;
      }
      handler?.(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Remove event listener on cleanup
    onCleanup(() => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    });
  });
}
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
    provideOnClickOutside(
      this.dropdownElementRefSignal,
      () => (this.isDropdownOpen = false)
    );
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngAfterViewInit(): void {
    this.dropdownElementRefSignal.set(this.dropdownElementRef);
  }
}
