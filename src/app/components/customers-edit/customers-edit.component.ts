import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  // resetForm(customerForm: NgForm) {
  //   customerForm.resetForm({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     address: '',
  //     notes: '',
  //   });
  // }

  async onSubmit({ valid, value }: NgForm) {
    if (valid) {
      await this.customersService.edit(this.form.id, value);
      this.router.navigate(['/dashboard/customers']);
    }
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => {
        this.form = { ...this.form, ...customer };
        if (!this.form.firstName) this.router.navigateByUrl('/404');
      });
  }
}
