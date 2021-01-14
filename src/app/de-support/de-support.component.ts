import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-de-support',
  templateUrl: './de-support.component.html',
  styleUrls: ['./de-support.component.css']
})
export class DeSupportComponent implements OnInit {

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
