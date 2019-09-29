import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/admins.service';
import { Admin } from 'src/app/models/admin/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  admin: Admin = new Admin();
  updateAdminId: Number;

  constructor(
    private adminsService: AdminsService,
    private router: Router) {
    // User ID from URL
    this.updateAdminId = parseInt(this.router.url.split('/')[3]);

    // Filter admin from all admins 
    this.adminsService.getAll().subscribe(admins => {
      this.admin = admins.filter(c => c.id === this.updateAdminId)[0],
        console.log(this.admin);
    }
    )
  };

  ngOnInit() {
  };

  onEdit($event: Event) {
    $event.preventDefault();
    this.adminsService.update(this.admin).forEach(() => this.router.navigateByUrl('/admin/admins'));
  };
}
