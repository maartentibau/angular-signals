import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Next Steps -->
    <h2>Exercises</h2>

    <input type="hidden" #selection />

    <div class="card-container">
      <a class="card card-small" routerLink="exercise-1" tabindex="0"
        >exercise 1</a
      >
      <a class="card card-small" routerLink="exercise-2" tabindex="1"
        >exercise 2</a
      >
      <a class="card card-small" routerLink="exercise-3" tabindex="2"
        >exercise 3</a
      >
      <a class="card card-small" routerLink="exercise-3-1" tabindex="3"
        >exercise 3.1</a
      >
      <a class="card card-small" routerLink="exercise-4" tabindex="4"
        >exercise 4</a
      >
      <a class="card card-small" routerLink="exercise-5" tabindex="5"
        >exercise 5</a
      >
      <a class="card card-small" routerLink="exercise-6" tabindex="6"
        >exercise 6</a
      >
    </div>
    <br />
    <br />
    <br />
    <br />
    <!-- Resources -->
    <h2>Resources</h2>
    <p>Here are some links to help you get started:</p>

    <div class="card-container">
      <a
        class="card"
        target="_blank"
        rel="noopener"
        href="https://angular.io/tutorial"
      >
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
          />
        </svg>
        <span>Learn Angular</span>
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>

      <a
        class="card"
        target="_blank"
        rel="noopener"
        href="https://angular.io/cli"
      >
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          />
        </svg>
        <span>CLI Documentation</span>
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>

      <a
        class="card"
        target="_blank"
        rel="noopener"
        href="https://material.angular.io"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="margin-right: 8px"
          width="21.813"
          height="23.453"
          viewBox="0 0 179.2 192.7"
        >
          <path
            fill="#ffa726"
            d="M89.4 0 0 32l13.5 118.4 75.9 42.3 76-42.3L179.2 32 89.4 0z"
          />
          <path fill="#fb8c00" d="M89.4 0v192.7l76-42.3L179.2 32 89.4 0z" />
          <path
            fill="#ffe0b2"
            d="m102.9 146.3-63.3-30.5 36.3-22.4 63.7 30.6-36.7 22.3z"
          />
          <path
            fill="#fff3e0"
            d="M102.9 122.8 39.6 92.2l36.3-22.3 63.7 30.6-36.7 22.3z"
          />
          <path
            fill="#fff"
            d="M102.9 99.3 39.6 68.7l36.3-22.4 63.7 30.6-36.7 22.4z"
          />
        </svg>
        <span>Angular Material</span>
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>

      <a
        class="card"
        target="_blank"
        rel="noopener"
        href="https://blog.angular.io/"
      >
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
          />
        </svg>
        <span>Angular Blog</span>
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>

      <a
        class="card"
        target="_blank"
        rel="noopener"
        href="https://angular.io/devtools/"
      >
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <path
                d="M14.73,13.31C15.52,12.24,16,10.93,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.43,0,2.74-0.48,3.81-1.27L19.59,21L21,19.59L14.73,13.31z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z"
              />
              <polygon
                points="10.29,8.44 9.5,6 8.71,8.44 6.25,8.44 8.26,10.03 7.49,12.5 9.5,10.97 11.51,12.5 10.74,10.03 12.75,8.44"
              />
            </g>
          </g>
        </svg>
        <span>Angular DevTools</span>
        <svg
          class="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>
    </div>
  `,
  styles: [``],
})
export class StartComponent {
  title = 'angular-signals';
}
