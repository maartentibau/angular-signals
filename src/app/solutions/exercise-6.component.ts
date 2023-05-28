import {
  Component,
  effect,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

function provideDebounce<T>(value: WritableSignal<T>, delay: number) {
  let debouncedValue = signal<T | null>(null);

  let timeoutId: number | undefined = undefined;

  effect((onCleanup) => {
    // Clear timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    console.log('provideDebounce', value());
    // Set the timeout to update the debounced value after delay
    timeoutId = setTimeout(() => {
      debouncedValue.set(value());
    }, delay);

    // Cleanup function to clear the timeout
    onCleanup(() => {
      clearTimeout(timeoutId);
    });
  });

  return debouncedValue.asReadonly();
}

@Component({
  selector: 'app-exercice-6',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      #el
      type="text"
      [value]="searchQuery()"
      (input)="searchQuery.set(el.value)"
      placeholder="Search..."
    />
    <div *ngIf="isLoading">Loading...</div>
    <div *ngIf="!isLoading && results">
      <div *ngFor="let result of results">
        <!-- display the result here -->
        <h2>{{ result.title }}</h2>
        <p>{{ result.body }}</p>
      </div>
    </div>
  `,
  styles: [``],
})
export class ExerciseComponent {
  searchQuery = signal('');
  debouncedSearchQuery = provideDebounce(this.searchQuery, 500);
  results: Post[] = [];
  isLoading = false;

  constructor(private dataService: DataService) {
    effect(() => {
      this.isLoading = true;
      this.dataService
        .fetchPosts(this.debouncedSearchQuery() || '')
        .then((data) => {
          this.results = data || [];
          this.isLoading = false;
        });
    });
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  fetchPosts(query: string) {
    return firstValueFrom(
      this.http
        .get<Post[]>(this.apiUrl)
        .pipe(
          map((posts) =>
            posts.filter((post) =>
              post.title.toLowerCase().includes(query.toLowerCase())
            )
          )
        )
    );
  }
}
