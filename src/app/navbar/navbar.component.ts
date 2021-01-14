import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { Location } from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route: string;

  constructor(location: Location, router: Router) {

    router.events.subscribe(val => {
      this.route = location['_platformLocation'];
    


      if(this.route['href'].includes('home')){
      
        $('.start-header').css("opacity", "0.65")

        $(".start-header").mouseenter(function () {
    
          $(this).css("opacity", "1")
    
        }).mouseleave(function () {
          $(this).css("opacity", "0.65")
    
        });
        


        
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll == 0) {





        $(".start-header").mouseenter(function () {

          $(this).css("opacity", "1")

        }).mouseleave(function () {
          $(this).css("opacity", "0.65")

        });
        $('.start-header').css("opacity", "0.65")

      } else {

        $(".start-header").mouseenter(function () {

          $(this).css("opacity", "1")

        }).mouseleave(function () {
          $(this).css("opacity", "1")

        });

        $('.start-header').css("opacity", "1")
      }
    });


      }else{
        $('.start-header').css("opacity", "1")
        $(".start-header").mouseenter(function () {
    
          $(this).css("opacity", "1")
    
        }).mouseleave(function () {
          $(this).css("opacity", "1")
    
        });






        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          if (scroll == 0) {
    
    
    
    
    
            $(".start-header").mouseenter(function () {
    
              $(this).css("opacity", "1")
    
            }).mouseleave(function () {
              $(this).css("opacity", "1")
    
            });
            $('.start-header').css("opacity", "1")
    
          } else {
    
            $(".start-header").mouseenter(function () {
    
              $(this).css("opacity", "1")
    
            }).mouseleave(function () {
              $(this).css("opacity", "1")
    
            });
    
            $('.start-header').css("opacity", "1")
          }
        });
    


      }

    });
  }


  check(){
   
  }

  
  ngOnInit(): void {

    
    
    







  }


  ngAfterViewInit(){
    this.padding_elements();
  }



  padding_elements(){
    if(this.route == "/home"){
      $("#main_Content").css("transform","translateY(0px)")
    }else{
      $("#main_Content").css("transform","translateY(113px)")
    }
  }

}



