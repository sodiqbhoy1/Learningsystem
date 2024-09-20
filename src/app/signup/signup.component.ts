import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NavbarComponent, 
  ],
  
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formbuild: FormBuilder;
  public newform: FormGroup;
  states: any = '';
  local_govt: any = '';

  constructor(public form: FormBuilder, public http: HttpClient, public route: Router) {
    this.formbuild = form;
    this.newform = this.formbuild.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$')]],
      cpassword: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', [Validators.required]],
      class: ['', [Validators.required]],
      state: ['', [Validators.required]],
      lg: ['', [Validators.required]],
      parent: ['', [Validators.required]],
      parentnum: ['', [Validators.required]],
      studentID: [this.generateStudentId()]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator function to check if passwords match
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('cpassword')?.value ? null : { mismatch: true };
  }

  // Generate a six-digit unique ID for students
  generateStudentId(): string {
    const currentYear = new Date().getFullYear().toString().slice(-2); // Get the last 2 digits of the current year
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate 4 random digits
    return `${currentYear}${randomDigits}`;
  }


  // Fetch states when the page loads
  ngOnInit(): void {
    this.Getstates();
    this.newform.get('state')?.valueChanges.subscribe(() => {
      this.Getlg(); // Fetch local governments based on the selected state
    });
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

  // Submit button function
  submitBtn() {
    if (this.newform.valid) {
      // submit the form
      this.http.post('http://localhost/lms/student_signup.php', this.newform.value).subscribe((data: any) => {
        if (data.status) {
          alert(data.message) 
          // this.toastr.success(data.message);
          this.route.navigate(['/login']);
        } else {
          alert(data.message)
        }
      });
    } else {
     

      alert("Input cannot be empty")
      
    }
  }
}
