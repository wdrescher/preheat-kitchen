import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'preheat-kitchen';

  get backgroundImageProperties(): string {
    return "background: url(assets/vegetables-cooking-food-banner-size.jpg/) no-repeat center center fixed"
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#164969"
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        }
      },
      theme: "classic",
      content: {
        message: "This website uses cookies to deliver the best user experience",
        dismiss: "ok",
        link: "Learn more",
        href: "/dataprivacy" 
      }
    });
  }
}
