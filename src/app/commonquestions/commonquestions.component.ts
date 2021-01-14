import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-commonquestions',
  templateUrl: './commonquestions.component.html',
  styleUrls: ['./commonquestions.component.css']
})
export class CommonquestionsComponent implements OnInit {

  constructor() { 
    
  }

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
     /*   $(document).ready(function() {
      alert('I am Called From jQuery');
    }); */

    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })
    
    
    $('.card-header').click(function() { 
      $(this).find('i').toggleClass('fas fa-plus fas fa-minus'); 
    }); 
  }
  openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  five:boolean
  fiveFunction(){
    this.five = true
    this.all = false
    this.Second = false
    this.Second = false
    this.third = false
    this.four = false
    this.count = false
    this.about =false
    this.pay = false
  }
  all:boolean = true
  
  allFunction(){
    this.all = true
    this.Second = false
    this.Second = false
    this.third = false
    this.four = false
    this.five = false
    this.count = false
    this.about =false
    this.pay = false
  }
  
  first:boolean
  
  firstFunction(){
    this.first = true
    this.all = false
    this.Second = false
    this.third = false
    this.four = false
    this.five = false
    this.count = false
    this.about =false
    this.pay = false
  }
  
  
  Second:boolean
  
  secondFunction(){
    this.Second = true
    this.first = false
    this.all = false
    this.third = false
    this.four = false
    this.five = false
    this.count = false
    this.about =false
    this.pay = false
  }
  third:boolean
  
  thirdFunction(){
    this.third = true
    this.Second = false
    this.first = false
    this.all = false
    this.four = false
    this.five = false
    this.count = false
    this.about =false
    this.pay = false
  }

  four:boolean

  fourFunction(){
    this.four = true
    this.third = false
    this.Second = false
    this.first = false
    this.all = false
    this.five = false
    this.count = false
    this.about =false
    this.pay = false
  }
   count:boolean

   countFunction(){
     this.count = true
     this.four = false
     this.third = false
     this.Second = false
     this.first = false
     this.all = false
     this.five = false
     this.about =false
     this.pay = false
   }

   about:boolean

   aboutFunction(){
     this.about =true
     this.count = false
     this.four = false
     this.third = false
     this.Second = false
     this.first = false
     this.all = false
     this.five = false
     this.pay = false
   }

   pay:boolean

   payFunction(){
     this.pay = true
     this.about =false
     this.count = false
     this.four = false
     this.third = false
     this.Second = false
     this.first = false
     this.all = false
     this.five = false
   }

}
