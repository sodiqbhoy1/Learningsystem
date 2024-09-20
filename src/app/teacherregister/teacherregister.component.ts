import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormBuilder,  FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherregister',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './teacherregister.component.html',
  styleUrl: './teacherregister.component.css'
})
export class TeacherregisterComponent implements OnInit {
  
  public teacherform:FormGroup;
  formbuild:FormBuilder;
  states: any='';
  local_govt:any='';


  constructor(public form:FormBuilder, public http: HttpClient, public route:Router ){
    this.formbuild=form;
    this.teacherform=this.formbuild.group({
      title:['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$')]],
      cpassword: ['', Validators.required],
      school: ['', Validators.required],
      qualification: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      state: ['', [Validators.required]],
      lg: ['', [Validators.required]],
      staffID: [this.generateStaffId()]
    }, { validator: this.passwordMatchValidator });
    }

    // Custom validator function to check if passwords match
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('cpassword')?.value ? null : { mismatch: true };
  }

  // Generate a six-digit unique ID for Teachers
  generateStaffId(): string {
    const currentYear = new Date().getFullYear().toString().slice(-2); // Get the last 2 digits of the current year
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate 4 random digits
    return `STAFF/${currentYear}${randomDigits}`;
  }

  // Function to fetch states from the database
  Getstates() {
    this.http.get('http://localhost/lms/state.php').subscribe((data: any) => {
      this.states = data;
    });
  }

  // Function to fetch local governments based on the selected state
  Getlg() {
    this.http.get('http://localhost/lms/lg.php').subscribe((data: any) => {
      this.local_govt = data;
    });
  }


  // ng oninit to fetch states and local government
  ngOnInit(){
    this.Getstates();
    this.teacherform.get('state')?.valueChanges.subscribe(() => {
      this.Getlg(); // Fetch local governments based on the selected state
    });
    };


    // submit button function
    submit(){
      if (this.teacherform.valid) {
        // submit the form
        this.http.post('http://localhost/lms/teacher_register.php', this.teacherform.value).subscribe((data: any) => {
          if (data.status) {
            alert(data.message) 
            // this.toastr.success(data.message);
            this.route.navigate(['/teacherlogin']);
          } else {
            alert(data.message)
          }
        });
      } else {
        alert("Input cannot be empty")
        // this.toastr.info();
      }
    }


  }


  
