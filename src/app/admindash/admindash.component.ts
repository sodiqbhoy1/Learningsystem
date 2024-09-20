import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent implements OnInit {
  admindetails:any
  isCollapsed = false;
  totalTeachers = 42; // Placeholder for total number of teachers
  totalStudents = 320; // Placeholder for total number of students

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.admindetails = JSON.parse(localStorage.getItem('admin')|| '[]');
  }

}
