import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-record-partner',
  templateUrl: './record-partner.component.html',
  styleUrls: ['./record-partner.component.css']
})
export class RecordPartnerComponent implements OnInit {

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
