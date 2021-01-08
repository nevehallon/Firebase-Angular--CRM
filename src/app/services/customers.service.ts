import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;

  private customers$: Observable<Customer[]> = null;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection<Customer>('customers', (ref) =>
      ref.orderBy('firstName')
    );

    this.customers$ = this.customersRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  add(customer: Customer) {
    return this.customersRef.add(customer);
  }

  remove(id: string) {
    return this.customersRef.doc(id).delete();
  }

  edit(id: string, customer: Customer) {
    return this.customersRef.doc(id).update(customer);
  }

  getAll() {
    return this.customers$;
  }

  getById(id) {
    return this.customersRef.doc(id).valueChanges({ idField: 'id' });
  }
}
