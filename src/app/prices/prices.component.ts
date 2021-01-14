import { Component, OnInit, TemplateRef } from '@angular/core';
// I also import Router so that I can subscribe to events
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare var $: any;

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

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
    document.getElementById('text').title =" دفتر الحسابات كل ما يتعلق بأمورك المالية وكل ما يرغب محاسبك في تقييده";
   
    $(document).ready(function() {
      const minus = $('.quantity__minus3');
      const plus = $('.quantity__plus3');
      const input = $('.quantity__input3');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });

       
    $(document).ready(function() {
      const minus = $('.quantity__minus1');
      const plus = $('.quantity__plus1');
      const input = $('.quantity__input1');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus2');
      const plus = $('.quantity__plus2');
      const input = $('.quantity__input2');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus4');
      const plus = $('.quantity__plus4');
      const input = $('.quantity__input4');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus5');
      const plus = $('.quantity__plus5');
      const input = $('.quantity__input5');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus6');
      const plus = $('.quantity__plus6');
      const input = $('.quantity__input6');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus7');
      const plus = $('.quantity__plus7');
      const input = $('.quantity__input7');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus8');
      const plus = $('.quantity__plus8');
      const input = $('.quantity__input8');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus9');
      const plus = $('.quantity__plus9');
      const input = $('.quantity__input9');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus10');
      const plus = $('.quantity__plus10');
      const input = $('.quantity__input10');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus11');
      const plus = $('.quantity__plus11');
      const input = $('.quantity__input11');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus14');
      const plus = $('.quantity__plus14');
      const input = $('.quantity__input14');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 0) {
          value--;
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus12');
      const plus = $('.quantity__plus12');
      const input = $('.quantity__input12');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 3) {
          value--;
        }else if( value == 3){
          window.alert("ثلاثة مجاناً: المالك، المحاسب ومدير النظام")
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
    $(document).ready(function() {
      const minus = $('.quantity__minus13');
      const plus = $('.quantity__plus13');
      const input = $('.quantity__input13');
      minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 5) {
          value--;
        }else if( value == 5){
          window.alert("خمسة مجاناً: المالك، المحاسب ومدير النظام");
        }
        input.val(value);
      });
      
      plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template , {class: 'modal-lg'});
  }


}
