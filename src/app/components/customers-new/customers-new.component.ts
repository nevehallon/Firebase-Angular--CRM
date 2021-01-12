import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss'],
})
export class CustomersNewComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  resetForm(customerForm: NgForm) {
    customerForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  async onSubmit({ valid, value }: NgForm) {
    if (valid) {
      await this.customersService.add(value);
      this.router.navigate(['/dashboard/customers']);
    }
  }
  constructor(
    private router: Router,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {}
}
