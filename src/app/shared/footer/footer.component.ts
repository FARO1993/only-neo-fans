import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  scrollToSuccessStories() {
    const successStoriesSection = document.getElementById('about');
    if (successStoriesSection) {
      successStoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
