import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ele3dad',
  templateUrl: './ele3dad.component.html',
  styleUrls: ['./ele3dad.component.css']
})
export class Ele3dadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sub_ul = false

  toggle(){
    this.sub_ul = !this.sub_ul
  }
  

}
