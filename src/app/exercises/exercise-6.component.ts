import {
  AfterViewInit,
  Component,
  ElementRef,
  signal,
  untracked,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

function provideOnScreen(
  elementRef: WritableSignal<ElementRef | null>,
  rootMargin = '0px'
): WritableSignal<boolean> {
  // 🐨 Create a signal `isIntersecting` that will hold a boolean value indicating
  // whether the element is visible on screen or not. Initialize it as false.
  // 🐨 Create an effect function. Inside this effect:
  // 💰 Marty the Money Bag suggests creating a new IntersectionObserver instance.
  // This observer will update `isIntersecting` whenever the visibility of the
  // element referenced by `elementRef` changes.
  // If the `nativeElement` property of `elementRef` is not null, observe it with the IntersectionObserver.
  // Inside the cleanup function of the effect, if `nativeElement` is not null,
  // stop observing it with the IntersectionObserver.
  // 🏁 Finally, return the `isIntersecting` signal from `provideOnScreen`.
  // you can remove this line below, we add it for typescript
  return signal(false);
}

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #imageContainer>
      <img
        *ngIf="imageIsVisible()"
        [src]="imageUrl"
        alt="Lazy loaded image"
        style="width: 100%; height: auto;"
      />
    </div>
  `,
})
class LazyImageComponent implements AfterViewInit {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  imageContainerRef = signal<ElementRef | null>(null);
  imageVisible: WritableSignal<boolean> = signal(false);
  imageUrl: string =
    'https://via.placeholder.com/800x600.png?text=Image is loaded, nice';

  constructor() {
    // 🐨 Init imageVisible property by using provideOnScreen
  }

  ngAfterViewInit(): void {
    this.imageContainerRef.set(this.imageContainer);
  }

  imageIsVisible(): boolean {
    // 🐨 Try not using untracked, what difference do you see
    return untracked(this.imageVisible);
  }
}

// You don't need to touch the component below
@Component({
  selector: 'app-exercice-5',
  standalone: true,
  imports: [CommonModule, LazyImageComponent],
  template: `
    <div style="height: 100vh; overflow: auto; width: 600px">
      <div style="height: 150vh; background-color: #ddd;">
        Scroll down to load image...
      </div>

      <app-lazy-image></app-lazy-image>

      <div style="height: 150vh; background-color: #ddd;">
        Keep scrolling...
      </div>

      <app-lazy-image></app-lazy-image>

      <div style="height: 150vh; background-color: #ddd;">End of the page.</div>
    </div>
  `,
  styles: [``],
})
export class ExerciseComponent {}
