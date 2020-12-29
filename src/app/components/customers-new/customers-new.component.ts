import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';

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
  onSubmit() {
    console.log('Submit');
  }
  constructor() {}

  ngOnInit(): void {}
}
