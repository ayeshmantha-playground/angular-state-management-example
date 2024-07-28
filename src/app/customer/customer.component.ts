import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  @Input()
  customer: { id: string, name: string, isSelected: boolean } = {
    id: '',
    name: '',
    isSelected: false,
  }

  updateIsSelected() {
    this.customer.isSelected = !this.customer.isSelected;
  }

}
