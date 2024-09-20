import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-adminregister',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './adminregister.component.html',
  styleUrl: './adminregister.component.css'
})
export class AdminregisterComponent {
  formbuild: FormBuilder;
  public adminform: FormGroup;
  states: any = '';
  local_govt: any = '';

  constructor(public form: FormBuilder, public http: HttpClient, public route: Router) {
    this.formbuild = form;
    this.adminform = this.formbuild.group({
      adminID: ['', Validators.required],
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$')]],
      cpassword: ['', Validators.required],}, 
      { validator: this.passwordMatchValidator });
  }

  // Custom validator function to check if passwords match
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('cpassword')?.value ? null : { mismatch: true };
  }




  // Submit button function
  submitBtn() {
    if (this.adminform.valid) {
      // submit the form
      this.http.post('http://localhost/lms/admin_register.php', this.adminform.value).subscribe((data: any) => {
        if (data.status) {
          alert(data.message) 
          // this.toastr.success(data.message);
          this.route.navigate(['/adminlogin']);
        } else {
          alert(data.message)
        }
      });
    } else {
     
      alert("Input cannot be empty")
      
    }
  }

}
