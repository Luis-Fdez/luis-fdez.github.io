import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    './app.componet.styles/site-blocks.scss',
    './app.componet.styles/site-footer.scss',
    './app.componet.styles/site-navbar.scss']
})
export class AppComponent {
  title = 'AngularTest';
}
