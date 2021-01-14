import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-customers-service',
  templateUrl: './customers-service.component.html',
  styleUrls: ['./customers-service.component.css']
})
export class CustomersServiceComponent implements OnInit {

  constructor() { }

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
  }

}
