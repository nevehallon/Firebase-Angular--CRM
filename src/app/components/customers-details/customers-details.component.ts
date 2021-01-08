import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
})
export class CustomersDetailsComponent implements OnInit {
  customer$: Observable<Customer> = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) {
    // this.customer$ = this.customersService.getById(
    //   this.activatedRoute.snapshot.data.params.id
    // );
    //
    this.customer$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.customersService.getById(params.id))
    );
  }

  ngOnInit(): void {}
}
