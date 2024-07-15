import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './pages/adminPage/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'admin', component: AdminComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
