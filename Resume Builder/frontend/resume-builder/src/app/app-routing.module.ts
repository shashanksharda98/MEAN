import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:"", component:LandingPageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"build-resume", component:DetailspageComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
