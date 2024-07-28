import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormComponent} from "./form/form.component";
import {CustomerService} from "./servic/customer.service";
import {Customer} from "./Customer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'service-example';

  customers: Array<{ id: string, name: string }> = [];

  constructor(private customerService: CustomerService) {
    customerService.getCustomers().subscribe(customers => this.customers = customers)
  }

}
