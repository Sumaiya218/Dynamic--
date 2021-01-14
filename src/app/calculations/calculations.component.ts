import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleActive(id){
    $('.nav-item').removeClass('active2')
    $(`.${id}`).addClass('active2')
  }

}
