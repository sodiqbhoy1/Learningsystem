import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LogoutComponent } from "../logout/logout.component";


@Component({
  selector: 'app-tacherdash',
  standalone: true,
  imports: [CommonModule, LogoutComponent, RouterModule],
  templateUrl: './tacherdash.component.html',
  styleUrl: './tacherdash.component.css' 
})
export class TacherdashComponent implements OnInit {
  isSidenavOpen = true;
  teacherdetails:any;

  @ViewChild('logoutModal') logoutModal: any;

  constructor(private router: Router) {}

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  openLogoutModal() {
    this.logoutModal.open();
  }

  logout() {
    // Add your logout logic here
    console.log('Logged out');
    this.router.navigate(['/teacherlogin']);
  }

  onCancelLogout() {
    // Handle cancel logout if needed
    console.log('Logout cancelled');
  }


ngOnInit(): void {
  this.teacherdetails = JSON.parse(localStorage.getItem('teacher') || '[]');
}


}
