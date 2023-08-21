import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  benefits = [
    {
      img:'assets/benefits1.jpg',
      text: 'You will only focus in content creation while we do all the rest'
    },
    {
      img:'assets/benefits2.jpg',
      text: 'You will work less than 1 hour daily to make big profits'
    },
    {
      img:'assets/benefits3.jpg',
      text: 'You can work anywhere in the world and discover new countries while working'
    },
  ];
}
