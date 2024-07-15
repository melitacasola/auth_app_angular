import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/adminPage/admin.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { adminRoleGuard } from './guards/admin-role.guard';
import { userRoleGuard } from './guards/user-role.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [adminRoleGuard],
      },
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [userRoleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
