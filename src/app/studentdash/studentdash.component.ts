import { CommonModule } from '@angular/common';
import { Component,  ViewChild } from '@angular/core';
import { RouterModule, Router, RouterOutlet } from '@angular/router';
import { LogoutComponent } from "../logout/logout.component";


@Component({
  selector: 'app-studentdash',
  standalone: true,
  imports: [RouterModule, CommonModule, LogoutComponent, RouterOutlet],
  templateUrl: './studentdash.component.html',
  styleUrl: './studentdash.component.css'
})
export class StudentdashComponent  {

  studentdetails: any;
  isSidenavOpen = true;

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
    localStorage.removeItem('student');
    console.log('Logged out');
    this.router.navigate(['/login']);
  }

  onCancelLogout() {
    // Handle cancel logout if needed
    console.log('Logout cancelled');
  }


  
}
