import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as Aos from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ){

  }
  title = 'only-neo-fans';

  ngOnInit() {
  }

  ngAfterViewInit() {
    Aos.init();
    Aos.refresh();
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Scroll to top
    });
  }

}
