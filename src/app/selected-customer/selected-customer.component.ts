import {Component} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {CustomerService} from "../servic/customer.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-selected-customer',
  standalone: true,
  imports: [
    CustomerComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './selected-customer.component.html',
  styleUrl: './selected-customer.component.css'
})
export class SelectedCustomerComponent {
  customers: Array<{ id: string, name: string, isSelected: boolean }> = [];

  constructor(private customerService: CustomerService) {
    customerService.getCustomers().subscribe(customers => this.customers = customers);
  }
}
