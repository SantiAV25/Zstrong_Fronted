import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: 'main', loadComponent: () => import('./LoginComponents/main/main.page').then(m => m.MainPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./LoginComponents/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'create-mesociclo',
    loadComponent: () => import('./ExerciseComponents/mesociclo/create-mesociclo/create-mesociclo.page').then( m => m.CreateMesocicloPage)
  },
 

];
