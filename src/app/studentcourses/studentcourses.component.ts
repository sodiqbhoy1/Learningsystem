import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentcourses',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './studentcourses.component.html',
  styleUrl: './studentcourses.component.css'
})
export class StudentcoursesComponent implements OnInit {

  subjects:any=''

  constructor( public http:HttpClient ){}
  isDropdownOpen = false; // To track if dropdown is open or closed

  // Function to toggle the dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Function to close the dropdown
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  // Detect clicks outside of the dropdown to close it
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const insideDropdown = target.closest('.relative');

    if (!insideDropdown) {
      this.closeDropdown(); // Close the dropdown if clicked outside
    }
  }

  ngOnInit(): void {
    this.http.get('http://localhost/lms/subjects.php').subscribe((data:any)=>{
      this.subjects=data
      console.log(this.subjects);
      
    })
    
  }

}
