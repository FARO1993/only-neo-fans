import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @ViewChild('sidenav') closeSidenav!: MatSidenav;

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ){

  }

  closePanelAndToggleSidenav(panel: MatExpansionPanel): void {
    panel.close();
    this.sidenav.toggle();
  }

  scrollToSuccessStories() {
    this.router.navigate([], {
      relativeTo: this.route,
      fragment: 'about'
    });
    
    this.sidenav.toggle();
  }
}
