import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-order-support',
  templateUrl: './order-support.component.html',
  styleUrls: ['./order-support.component.css']
})
export class OrderSupportComponent implements OnInit {

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
