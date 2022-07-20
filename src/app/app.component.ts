import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application';
  url:string ='';
  isLoginPage: boolean = true;
  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd && event.url) {
        switch(event.url){
          case '/sign-up':
            this.url='Sign Up';
            break;
          case '/login':
            this.url='Log In';
            break;
          case '/home':
            this.url = 'CRUD Operations';
            break;
          default:
            this.url =''
            break;
        }
      }
    });
  }
}
