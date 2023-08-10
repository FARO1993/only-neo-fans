import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router
  ){

  }

  //Redirect ContactComponent
  redirectContactUs(){
    this.router.navigate(['/contact-us']);
  }

  //Redirect ManagementComponent
  redirectManagement(){
    this.router.navigate(['/management']);
  }

  //Redirect BenefitsComponent
  redirectBenefits(){
    this.router.navigate(['/benefits']);
  }
}
