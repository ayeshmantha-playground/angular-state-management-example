import {Component} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {Customer} from "../Customer";
import {CustomerService} from "../servic/customer.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CustomerComponent, CommonModule, CustomerComponent
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customers: Array<{ id: string, name: string,isSelected:boolean }> = [];

  constructor(private customerService: CustomerService) {
    customerService.getCustomers().subscribe(customers => this.customers = customers);
  }
}
