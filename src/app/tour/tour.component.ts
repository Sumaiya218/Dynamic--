import { Component, OnInit, TemplateRef } from '@angular/core';
declare var $: any;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// I import Location so that I can query the current path
import { Location } from "@angular/common";
// I also import Router so that I can subscribe to events
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  modalRef: BsModalRef;


  init(){
    let x=  this.animation();
    $( x ).off( event );
    

    }
    route: string;

    constructor(location: Location, router: Router ,private modalService: BsModalService) {

      router.events.subscribe(val => {
        this.route = location['_platformLocation'].location.pathname;
        

      });


      
    }


    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template , {class: 'modal-lg'});
    }

  name

  ngOnInit(): void {
    var btn = $('#btn');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

/*     $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
        if(scroll == 0){
 */
 this.init();

  


    
         
  }




  animation(){
    $(document).ready(function () {

      $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
       
          if(scroll == 1500 || scroll == 1400 || scroll == 1550  ){
            
            $(".button_animated").animate({
              top: '-50',
              opacity: '1',
    
    
            },200);
            $(".button_animated").animate({
              top: '0',
             
    
    
            },220);
            $(".button_animated").animate({
              top: '-25',
              opacity: '1',
    
    
            }, 240);
    
            $(".button_animated").animate({
              top: '0',
              opacity: '1',
    
    
            }, 260);
    
          }
        
        })
      
      });
              
    
  }


}
