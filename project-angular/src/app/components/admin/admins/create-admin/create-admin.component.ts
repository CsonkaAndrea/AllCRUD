import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/admins.service';
import { Admin } from 'src/app/models/admin/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  admin: Admin = new Admin();

  constructor(
    private adminsService: AdminsService,
    private router: Router) {
  };

  ngOnInit() {
  };

  onCreate($event: Event) {
    $event.preventDefault();
    console.log(this.admin);
    this.adminsService.create(this.admin).forEach(() => this.router.navigateByUrl('/admin/admins'));
  };
}

