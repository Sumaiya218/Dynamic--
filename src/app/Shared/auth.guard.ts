import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
 
 import { Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
 import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  state:any;
  language= localStorage.getItem('language')
   

  constructor(private router: Router  ) {   }

   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


      if (localStorage.getItem("token") && localStorage.getItem("statue")) {
      
      return true;
      } else {
       /*  alert("يرجي تسجيل الدخول اولا")
        this.router.navigate(['/login'], {
          queryParams: {
            return: state.url
          }
        }); */


        if(this.language == 'en'){
          Swal.fire({
            title: 'Login',
            text: "Please login first",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2EB7B2 ',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/login'], {
                queryParams: {
                  return: state.url
                }
              });
      
            }
          })
        }else{
          Swal.fire({
            title: 'تسجيل الدخول',
            text: "من فضلك سجل الدخول اولا",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2EB7B2 ',
            cancelButtonColor: '#d33',
            confirmButtonText: 'تسجيل الدخول'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/login'], {
                queryParams: {
                  return: state.url
                }
              });
      
            }
          })
        }
        
        //this.notifier.notify("warning", "يرجي تسجيل الدخول اولا");

        return false;
      }

    }
  }
  
