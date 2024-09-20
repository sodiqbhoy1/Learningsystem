import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  loginform:any=''
formbuild: FormBuilder;

  constructor(public fb:FormBuilder, public route:Router, public http:HttpClient){
    this.formbuild=fb;
    this.loginform= this.formbuild.group({
      email:['', Validators.required ],
      password: ['', Validators.required ],
    })
  }




  submitBtn(){
    if (this.loginform.valid){
      // console.log(this.loginform.value);
      this.http.post("http://localhost/lms/admin_login.php", this.loginform.value).subscribe((data:any)=>{
        if (data.status == true){
          localStorage.setItem('admin', JSON.stringify(data.userdetails))
          this.route.navigate(['/admindash'])
        }
      })
  }
  }

}
