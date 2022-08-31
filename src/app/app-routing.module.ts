import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-routing-preload';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/authentication/authentication.module').then(module => module.AuthenticationModule ),
    data: { preload: true }
  },
  {
    path: 'app',
    loadChildren: () => import('src/app/modules/app/app.module').then(module => module.AppModule),
    data: { preload: true }
  },
  // DEFAULT ROOT
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

export const appRoutes = RouterModule.forRoot(routes, {
  preloadingStrategy: AppCustomPreloader
});
