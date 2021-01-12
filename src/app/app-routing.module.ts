import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: AuthFormComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full',
      },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'customers/new',
        component: CustomersNewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'customers/:id',
        component: CustomersDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'customers/:id/edit',
        component: CustomersEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
