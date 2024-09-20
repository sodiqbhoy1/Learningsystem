import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmissionComponent } from './admission/admission.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { TacherdashComponent } from './tacherdash/tacherdash.component';
import { TeacherregisterComponent } from './teacherregister/teacherregister.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentcoursesComponent } from './studentcourses/studentcourses.component';
import { StudentgradesComponent } from './studentgrades/studentgrades.component';

export const routes: Routes = [
    {path:'', component:HomeComponent },
    {path:'login', component:LoginComponent },
    {path:'register', component:SignupComponent },
    {path:'admission', component: AdmissionComponent },
    {path:'about', component: AboutComponent },
    {path:'contact', component: ContactComponent },

    
    {path:'studentdash', component: StudentdashComponent, children:[
        
        {path:'studentprofile', component: StudentprofileComponent },
        {path:'studentgrades', component: StudentgradesComponent },
        {path:'studentcourses', component: StudentcoursesComponent },
    ] },
    {path:'teacherdash', component: TacherdashComponent  },
    {path:'teacherregister', component: TeacherregisterComponent  },
    {path:'teacherlogin', component: TeacherloginComponent  },
    {path:'adminregister', component: AdminregisterComponent  },
    {path:'adminlogin', component: AdminloginComponent  },
    {path:'admindash', component: AdmindashComponent  },
];
