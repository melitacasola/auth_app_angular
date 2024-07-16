import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeliErrorPageComponent } from 'meli-error-page';
import { authGuard } from './core/guards/login.guard';
import { PublicGuard } from './core/guards/public.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule),
    canActivate: [PublicGuard],
  },
  { path: 'error', component: MeliErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
