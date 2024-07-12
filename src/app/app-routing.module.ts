import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeliErrorPageComponent } from 'meli-error-page';

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
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./features/login/login.module').then(m => m.LoginModule),
  // },
  { path: 'error', component: MeliErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
