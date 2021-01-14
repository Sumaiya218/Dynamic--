import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ApiService: ApiService) { }

  home

  ngOnInit(): void {



    this.ApiService.GetHomeData2().subscribe(
      res => {

        let resources: any[] = res["data"];
        this.home =  res["data"]
        
        console.log( res["data"]);
        
      });
      




    $("#footer").css("transform", "translateY(0px)")
    $(document).ready(function () {
      //Event for pushed the video
      $('#carouselExampleInterval').carousel({
        pause: true,
        interval: false
      });
    });

    this.animateItFirst()

   /*  var btn = $('#btn');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    }); */



  }





  animateIt() {



    setTimeout(function () {

      if ($('.first').hasClass("active")) {



        /************* Cancel 11th slide animation  ********/
        setTimeout(function () {
          $(".img-solve").animate({

            right: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".head-solve").animate({

            left: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".pragrph-solve").animate({

            right: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".link-solve").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".img2-solve").animate({

            bottom: '-200',
            opacity: '0',
          }, "slow");

        }, 0);










        /******* start first animation  ***********/
        setTimeout(function () {
          $(".collect").animate({
            left: '0',
            opacity: '1',
            duration: 500,

          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".head").animate({
            left: '0',
            opacity: '1',
            duration: 500,

          }, "slow");

        }, 500);

        setTimeout(function () {
          $(".text").animate({
            left: '00px',
            opacity: '1',
            duration: 500,

          }, "slow");

        }, 1000);

        setTimeout(function () {
          $(".button").animate({
            left: '0',
            opacity: '1',
            duration: 500,

          }, "slow");
        }, 1500);
        setTimeout(function () {
          $(".bigImg").animate({
            right: '0',
            opacity: '1',
            duration: 1000,

          }, "slow");
        }, 2000);


        /************ cancel second slide animation  **************/



        setTimeout(function () {
          $(".first_Text").animate({
            right: '-300px',
            opacity: '0',


          }, "slow");

        }, 0);


        setTimeout(function () {
          $(".second_text").animate({
            left: '-300px',
            opacity: '0',


          }, "slow");

        }, 0);




      } else if ($('.second').hasClass("active")) {


        /******** Cancel first slide  animations**************/

        setTimeout(function () {
          $(".collect").animate({
            left: '-50',
            opacity: '0',


          }, "slow");

        }, 0);


        setTimeout(function () {
          $(".head").animate({
            left: '-50',
            opacity: '0',


          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".text").animate({
            left: '-250px',
            opacity: '0',


          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".button").animate({
            left: '-50',
            opacity: '0',


          }, "slow");
        }, 0);
        setTimeout(function () {
          $(".bigImg").animate({
            right: '-50',
            opacity: '0',


          }, "slow");
        }, 0);












        /********* Start second slide animation *****************/


        setTimeout(function () {
          $(".first_Text").animate({
            right: '0',
            opacity: '1',


          }, "slow");

        }, 0);


        setTimeout(function () {
          $(".second_text").animate({
            left: '0',
            opacity: '1',


          }, "slow");

        }, 0);



        /************* Cancel third slide animation  ********/
        setTimeout(function () {
          $(".big_text").animate({
            top: '-55',
            opacity: '0',
            display: 'unset'


          }, "slow");

        }, 0);


      } else if ($('.third').hasClass("active")) {


        /************ cancel second slide animation  **************/



        setTimeout(function () {
          $(".first_Text").animate({
            right: '-300px',
            opacity: '0',


          }, "slow");

        }, 0);


        setTimeout(function () {
          $(".second_text").animate({
            left: '-300px',
            opacity: '0',


          }, "slow");

        }, 0);



        /************* start third slide animation  ********/
        setTimeout(function () {
          $(".big_text").animate({

            top: '250',
            opacity: '1',


          }, "slow");

        }, 0);


        /************* Cancel fourth slide animation  ********/
        setTimeout(function () {
          $(".text_fourth").animate({

            top: '-330',
            opacity: '0',


          }, "slow");

        }, 0);


      } else if ($('.fourth').hasClass("active")) {




        /************* Cancel third slide animation  ********/


        setTimeout(function () {
          $(".big_text").animate({
            top: '-55',
            opacity: '0',
            display: 'unset'



          }, "slow");

        }, 0);




        /************* start fourth slide animation  ********/
        setTimeout(function () {
          $(".text_fourth").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 0);






        /************* Cancel fifth slide animation  ********/


        setTimeout(function () {
          $(".fifth_text").animate({
            right: '-300',
            opacity: '0',




          }, "slow");

        }, 0);



      }









      else if ($('.fifth').hasClass("active")) {



        /************* Cancel fourth slide animation  ********/
        setTimeout(function () {
          $(".text_fourth").animate({

            top: '-330',
            opacity: '0',


          }, "slow");

        }, 0);



        /************* start fifth slide animation  ********/
        setTimeout(function () {
          $(".fifth_text").animate({

            right: '0',
            opacity: '1',


          }, "slow");

        }, 0);


        /************* Cancel 6th slide animation  ********/


        setTimeout(function () {
          $(".6th_text").animate({
            right: '-300',
            opacity: '0',




          }, "slow");

        }, 0);



      } else if ($('.6th').hasClass("active")) {



        /************* Cancel fifth slide animation  ********/


        setTimeout(function () {
          $(".fifth_text").animate({
            right: '-300',
            opacity: '0',




          }, "slow");

        }, 0);


        /************* start 6th slide animation  ********/
        setTimeout(function () {
          $(".6th_text").animate({

            right: '0',
            opacity: '1',


          }, "slow");

        }, 0);



        /************* Cancel 7th slide animation  ********/


        setTimeout(function () {
          $(".text1_7th").animate({

            top: '-300',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".text2_7th").animate({

            bottom: '-300',
            opacity: '0',


          }, "slow");

        }, 0);


      } else if ($('.7th').hasClass("active")) {



        /************* Cancel 6th slide animation  ********/


        setTimeout(function () {
          $(".6th_text").animate({
            right: '-300',
            opacity: '0',




          }, "slow");

        }, 0);


        /************* start 7th slide animation  ********/
        setTimeout(function () {
          $(".text1_7th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".text2_7th").animate({

            bottom: '0',
            opacity: '1',


          }, "slow");

        }, 0);



      } else if ($('.8th').hasClass("active")) {



        /************* Cancel 7th slide animation  ********/
        setTimeout(function () {
          $(".text1_7th").animate({

            top: '-300',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".text2_7th").animate({

            bottom: '-300',
            opacity: '0',


          }, "slow");

        }, 0);



        /************* start 8th slide animation  ********/
        setTimeout(function () {
          $(".8th_text").animate({

            bottom: '0',
            opacity: '1',


          }, 800);

        }, 0);


        /************* Cancel 9th slide animation  ********/


        setTimeout(function () {
          $(".text1_9th").animate({

            top: '-300',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".text2_9th").animate({

            bottom: '-300',
            opacity: '0',


          }, "slow");

        }, 0);




      } else if ($('.9th').hasClass("active")) {



        /************* Cancel 8th slide animation  ********/


        setTimeout(function () {
          $(".8th_text").animate({
            right: '-300',
            opacity: '0',




          }, "slow");

        }, 0);


        /************* start 9th slide animation  ********/
        setTimeout(function () {
          $(".text1_9th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".text2_9th").animate({

            bottom: '0',
            opacity: '1',


          }, "slow");

        }, 0);








        /************* Cancel 10th slide animation  ********/
        setTimeout(function () {
          $(".head1_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".head2_10th").animate({

            top: '-300',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".img1_10th").animate({


            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".img2_10th").animate({

            right: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".img3_10th").animate({

            left: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".small_1_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".small_2_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".small_3_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".small_4_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_5_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_6_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_7_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_8_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");


        }, 0);







      } else if ($('.10th').hasClass("active")) {



        /************* Cancel 9th slide animation  ********/


        setTimeout(function () {
          $(".text1_9th").animate({
            top: '-300',
            opacity: '0',




          }, "slow");

        }, 0);


        setTimeout(function () {
          $(".text2_9th").animate({
            bottom: '-300',
            opacity: '0',




          }, "slow");

        }, 0);


        /************* start 10th slide animation  ********/
        setTimeout(function () {
          $(".head1_10th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".head2_10th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 500);



        setTimeout(function () {
          $(".img1_10th").animate({


            opacity: '1',


          }, "slow");

        }, 1000);



        setTimeout(function () {
          $(".img2_10th").animate({

            right: '50',
            opacity: '1',


          }, "slow");

        }, 1500);




        setTimeout(function () {
          $(".img3_10th").animate({

            left: '30',
            opacity: '1',


          }, "slow");

        }, 2000);




        setTimeout(function () {
          $(".small_1_img_10th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 2500);



        setTimeout(function () {
          $(".small_2_img_10th").animate({

            bottom: '60',
            opacity: '1',


          }, "slow");

        }, 3000);




        setTimeout(function () {
          $(".small_3_img_10th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 3500);

        setTimeout(function () {
          $(".small_4_img_10th").animate({

            bottom: '60',
            opacity: '1',


          }, "slow");

        }, 4000);
        setTimeout(function () {
          $(".small_5_img_10th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 4500);
        setTimeout(function () {
          $(".small_6_img_10th").animate({

            bottom: '60',
            opacity: '1',


          }, "slow");

        }, 5000);
        setTimeout(function () {
          $(".small_7_img_10th").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 5500);
        setTimeout(function () {
          $(".small_8_img_10th").animate({

            bottom: '60',
            opacity: '1',


          }, "slow");

        }, 6000);
























        /************* Cancel 11th slide animation  ********/
        setTimeout(function () {
          $(".img-solve").animate({

            right: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".head-solve").animate({

            left: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".pragrph-solve").animate({

            right: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".link-solve").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".img2-solve").animate({

            bottom: '-200',
            opacity: '0',
          }, "slow");

        }, 2000);


      } else if ($('.11th').hasClass("active")) {












        /************* Cancel 10th slide animation  ********/
        setTimeout(function () {
          $(".head1_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".head2_10th").animate({

            top: '-300',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".img1_10th").animate({


            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".img2_10th").animate({

            right: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".img3_10th").animate({

            left: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".small_1_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);



        setTimeout(function () {
          $(".small_2_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");

        }, 0);




        setTimeout(function () {
          $(".small_3_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".small_4_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_5_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_6_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_7_img_10th").animate({

            top: '-200',
            opacity: '0',


          }, "slow");

        }, 0);
        setTimeout(function () {
          $(".small_8_img_10th").animate({

            bottom: '-200',
            opacity: '0',


          }, "slow");


        }, 0);



        /************* start 11th slide animation  ********/
        setTimeout(function () {
          $(".img-solve").animate({

            right: '0',
            opacity: '1',


          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".head-solve").animate({

            left: '0',
            opacity: '1',


          }, "slow");

        }, 500);



        setTimeout(function () {
          $(".pragrph-solve").animate({

            right: '0',
            opacity: '1',


          }, "slow");

        }, 1000);



        setTimeout(function () {
          $(".link-solve").animate({

            top: '0',
            opacity: '1',


          }, "slow");

        }, 1500);



        setTimeout(function () {
          $(".img2-solve").animate({

            bottom: '0',
            opacity: '1',


          }, "slow");

        }, 2000);


































        /******** Cancel first slide  animations**************/

        setTimeout(function () {
          $(".collect").animate({
            left: '-50',
            opacity: '0',


          }, "slow");

        }, 0);


        setTimeout(function () {
          $(".head").animate({
            left: '-50',
            opacity: '0',


          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".text").animate({
            left: '-250px',
            opacity: '0',


          }, "slow");

        }, 0);

        setTimeout(function () {
          $(".button").animate({
            left: '-50',
            opacity: '0',


          }, "slow");
        }, 0);
        setTimeout(function () {
          $(".bigImg").animate({
            right: '-50',
            opacity: '0',


          }, "slow");
        }, 0);










      }

    }, 700);



  }



  animateItFirst() {

    if ($('.first').hasClass("active")) {

      setTimeout(function () {
        $(".collect").animate({
          left: '0',
          opacity: '1',
          duration: 500,

        }, "slow");

      }, 1000);

      setTimeout(function () {
        $(".head").animate({
          left: '0',
          opacity: '1',
          duration: 500,

        }, "slow");

      }, 1500);

      setTimeout(function () {
        $(".text").animate({
          left: '00px',
          opacity: '1',
          duration: 500,

        }, "slow");

      }, 2000);

      setTimeout(function () {
        $(".button").animate({
          left: '0',
          opacity: '1',
          duration: 500,

        }, "slow");
      }, 2500);
      setTimeout(function () {
        $(".bigImg").animate({
          right: '0',
          opacity: '1',
          duration: 1000,

        }, "slow");
      }, 3000);

    }

  }


}
