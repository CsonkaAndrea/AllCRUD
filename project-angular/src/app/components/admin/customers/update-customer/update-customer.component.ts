import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  @Input() customerForInput;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    this.customersService.update(this.customerForInput).subscribe()
  };


}
