import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/customer/customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(
    private customersService: CustomersService,
    private router: Router) {
  };

  customers: Customer[];
  updateCustomer: Customer = new Customer();

  // Read all customers onInit
  ngOnInit() {
    this.customersService.getAll().subscribe(customers => {
      this.customers = customers,
        console.log(this.customers)
    });
  };

  // Delete customer
  onDeleteCustomer(customer: Customer) {
    // Remove from UI
    this.customers = this.customers.filter(c => c.id !== customer.id);
    // Remove from SERVER
    this.customersService.remove(customer).subscribe();
  };

  // Update customer
  onUpdateCustomer(customer: Customer) {
    this.updateCustomer = customer;
  };


}
