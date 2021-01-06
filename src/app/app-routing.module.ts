import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new', component: CustomersNewComponent },
  { path: 'customers/:id/edit', component: CustomersEditComponent },
  { path: 'customers/:id', component: CustomersDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
