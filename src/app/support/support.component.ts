import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemsPerSlide = 5;
  singleSlideOffset = true;
 
  slides = [
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/bi.png"},
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/analytics-1.png"},
    {image:"../../assets/img/analytics-1.png"}
  ];

}
