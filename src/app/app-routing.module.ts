import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_shared/components/auth.gaurd';
import { LoginGuard } from './_shared/components/login.gaurd';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module')
  .then(module=> module.LoginModule),
  canActivate: [LoginGuard]
},
{ path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module')
  .then(module=> module.SignUpModule),canActivate:[LoginGuard]
},
{ path: 'home', loadChildren: () => import('./pages/crud-operations/crud-operations.module')
  .then(module=> module.CrudOperationsModule), canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
