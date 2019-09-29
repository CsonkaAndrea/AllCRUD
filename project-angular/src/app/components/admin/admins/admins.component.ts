import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/admins.service';
import { Admin } from 'src/app/models/admin/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(
    private adminsService: AdminsService,
    private router: Router) {
  };

  admins: Admin[];
  updateAdmin: Admin = new Admin();

  // Read all admins onInit
  ngOnInit() {
    this.adminsService.getAll().subscribe(admins => {
      this.admins = admins
    });
  };

  // Delete admin
  onDeleteAdmin(admin: Admin) {
    // Remove from UI
    this.admins = this.admins.filter(a => a.id !== admin.id);
    // Remove from SERVER
    this.adminsService.remove(admin).subscribe();
  };

}
