import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthorizationGuard } from './authorization.guard';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: UserComponent, canActivate: [AuthorizationGuard] },
  { path: 'admin', component: AdminComponent, 
    canActivate: [AuthorizationGuard], 
    data: {
      roles: ['admin']
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
