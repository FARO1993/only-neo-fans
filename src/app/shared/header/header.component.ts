import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ){

  }
  scrollToSuccessStories() {
    this.router.navigate([], {
      relativeTo: this.route,
      fragment: 'about'
    });
    
    this.sidenav.toggle();
  }
}
