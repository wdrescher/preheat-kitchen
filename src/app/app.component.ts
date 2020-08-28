import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preheat-kitchen';

  get backgroundImageProperties(): string {
    return "background: url(assets/vegetables-cooking-food-banner-size.jpg/) no-repeat center center fixed"
  }
}
