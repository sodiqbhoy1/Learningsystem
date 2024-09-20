import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})

export class AdmissionComponent implements OnInit {
  admissionStatus: boolean = false; // Set this to false if admissions are closed

  ngOnInit() {
    console.log('Admission Status:', this.admissionStatus);
  }

  
}
