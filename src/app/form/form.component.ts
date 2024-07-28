import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CustomerListComponent} from "../customer-list/customer-list.component";
import {SelectedCustomerComponent} from "../selected-customer/selected-customer.component";
import {CustomerService} from "../servic/customer.service";
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CustomerListComponent,
    SelectedCustomerComponent,
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  id: string = "";
  name: string = "";
  customers: Array<{ id: string, name: string, isSelected: boolean }> = [];
  @Input()
  selectedCount: number = 0;

  customer: { id: string, name: string, isSelected: boolean } = {
    id: '',
    name: '',
    isSelected: false
  }

  constructor(private customerService: CustomerService) {
    customerService.getCustomers().subscribe(customer => this.customers = customer);
  }

  addId(id: string) {
    this.id = id;
  }

  addName(name: string) {
    this.name = name;
  }

  updateCustomers() {
    if (this.id != null && this.name != null) {
    }
    this.customers.push(this.customer = {id: this.id, name: this.name, isSelected: false});
    this.customerService.updateCustomers(this.customers);

  }


}
