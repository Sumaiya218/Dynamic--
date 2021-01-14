import { Component, OnInit } from '@angular/core';
declare var $;


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $(".program").click(function(){
      $(".slider").slideToggle();
    })
   
  }

}
