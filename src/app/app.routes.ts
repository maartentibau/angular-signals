import { Routes } from '@angular/router';
import { StartComponent } from './start.component';
import { Exercise2Component } from './solutions/exercise-2.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StartComponent,
  },
  {
    path: 'exercise-2',
    pathMatch: 'full',
    loadComponent: () =>
      // import('./exercises/exercise-2.component').then(
      //   (module) => module.Exercise2Component
      // ),
      // // Uncomment below to display the solution
      import('./solutions/exercise-2.component').then(
        (module) => module.Exercise2Component
      ),
  },
];
