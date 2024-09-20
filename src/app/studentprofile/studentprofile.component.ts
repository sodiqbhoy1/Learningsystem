import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentprofile',
  standalone: true,
  imports: [],
  templateUrl: './studentprofile.component.html',
  styleUrl: './studentprofile.component.css'
})
export class StudentprofileComponent implements OnInit {

   public studentdetails:any=''



  ngOnInit(): void {
    this.studentdetails = JSON.parse(localStorage.getItem('student') || '[]');
  }
  

}
