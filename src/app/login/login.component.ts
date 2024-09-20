import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,  FooterComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isMenuOpen = false;
 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
constructor ( public router:Router){}
  
// login button
submitBtn(){
    
this.router.navigate(['/studentdash/studentprofile'])
}

}
