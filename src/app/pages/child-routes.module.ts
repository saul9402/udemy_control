import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { PersonsComponent } from './persons/persons.component';
import { AccountsComponent } from './accounts/accounts.component';

const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'personas', component: PersonsComponent, canActivate: [AuthGuard], data: { title: 'Personas' } },
  { path: 'cuentas', component: AccountsComponent, canActivate: [AuthGuard], data: { title: 'Cursos' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
