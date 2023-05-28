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
  {
    path: 'exercise-3',
    pathMatch: 'full',
    loadComponent: () =>
      // import('./exercises/exercise-3.component').then(
      //   (module) => module.ExerciseComponent
      // ),
      // // Uncomment below to display the solution
      import('./solutions/exercise-3.component').then(
        (module) => module.ExerciseComponent
      ),
  },
  {
    path: 'exercise-3-1',
    pathMatch: 'full',
    loadComponent: () =>
      // import('./exercises/exercise-3-1.component').then(
      //   (module) => module.ExerciseComponent
      // ),
      // // Uncomment below to display the solution
      import('./solutions/exercise-3-1.component').then(
        (module) => module.ExerciseComponent
      ),
  },
  {
    path: 'exercise-4',
    pathMatch: 'full',
    loadComponent: () =>
      // import('./exercises/exercise-4.component').then(
      //   (module) => module.ExerciseComponent
      // ),
      // // Uncomment below to display the solution
      import('./solutions/exercise-4.component').then(
        (module) => module.ExerciseComponent
      ),
  },
  {
    path: 'exercise-5',
    pathMatch: 'full',
    loadComponent: () =>
      // import('./exercises/exercise-5.component').then(
      //   (module) => module.ExerciseComponent
      // ),
      // // Uncomment below to display the solution
      import('./solutions/exercise-5.component').then(
        (module) => module.ExerciseComponent
      ),
  },
  {
    path: 'exercise-6',
    pathMatch: 'full',
    loadComponent: () =>
      // import('./exercises/exercise-6.component').then(
      //   (module) => module.ExerciseComponent
      // ),
      // // Uncomment below to display the solution
      import('./solutions/exercise-6.component').then(
        (module) => module.ExerciseComponent
      ),
  },
];
