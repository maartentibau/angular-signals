import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  Input,
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
  const isIntersecting = signal(false);

  effect((onCleanup) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        isIntersecting.set(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (elementRef()?.nativeElement) {
      observer.observe(elementRef()?.nativeElement);
    }

    onCleanup(() => {
      if (elementRef()?.nativeElement) {
        observer.unobserve(elementRef()?.nativeElement);
      }
    });
  });

  return isIntersecting;
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
    this.imageVisible = provideOnScreen(this.imageContainerRef);
  }

  ngAfterViewInit(): void {
    this.imageContainerRef.set(this.imageContainer);
  }

  imageIsVisible(): boolean {
    return untracked(this.imageVisible);
  }
}

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
