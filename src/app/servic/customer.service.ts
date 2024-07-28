import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers = new BehaviorSubject<Array<{ id: string, name: string, isSelected: boolean }>>([]);
  private selectedCount = new BehaviorSubject<number>(0);

  constructor() {

  }

  public getCustomers() {
    return this.customers;
  }

  public updateCustomers(customers: Array<{ id: string, name: string, isSelected: boolean }>) {
    this.customers.next(customers);

  }

  public getSelectedCount() {
    return this.selectedCount;
  }

  public updateSelectedCount() {

  }


}
