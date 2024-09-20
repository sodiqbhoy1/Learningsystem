import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-teacherlogin',
  standalone: true,
  imports: [ CommonModule, NavbarComponent],
  templateUrl: './teacherlogin.component.html',
  styleUrl: './teacherlogin.component.css'
})
export class TeacherloginComponent {


constructor( public route:Router){}

submitBtn(){

        this.route.navigate(['/teacherdash'])
      }

}
  