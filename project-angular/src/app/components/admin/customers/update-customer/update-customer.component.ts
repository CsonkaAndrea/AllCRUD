import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/customer/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  updateUserId: Number;

  constructor(
    private customersService: CustomersService,
    private router: Router) {
    // User ID from URL
    this.updateUserId = parseInt(this.router.url.split('/')[3]);

    // Filter user from all users 
    this.customersService.getAll().subscribe(customers => {
      this.customer = customers.filter(c => c.id === this.updateUserId)[0],
        console.log(this.customer);
    }
    )
  };

  ngOnInit() {
  };

  onEdit($event: Event) {
    $event.preventDefault();
    this.customersService.update(this.customer).forEach(() => this.router.navigateByUrl('/admin/users'));
  };

};

