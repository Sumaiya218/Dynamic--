import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// I import Location so that I can query the current path
import { Location } from "@angular/common";
// I also import Router so that I can subscribe to events

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  route
  constructor(location: Location,private router: Router) {
    router.events.subscribe(val => {
      this.route =location['_platformLocation'].location.pathname;
      

    }); 


  /*   router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "Home";
      }
    }); */
   }
  ngOnInit() {
    if(this.route ==="/home"){
      
    }
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });


    console.log(this.route)
}

}
