import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable, of, } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  endpoint = environment.apiHost;
  user_id: string;
  token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("token")
  }


  httpOptions = {
    headers: new HttpHeaders({
      'content': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
    })
  }

 

  /*************************************User***************************************************/

  login(body): Observable<any> {
    return this.http.post<any>(this.endpoint + '/api/User/login', body, this.httpOptions)
  }

  loginAdmin(body): Observable<any> {

    return this.http.post(this.endpoint + '/api/User/loginAdmin', body, this.httpOptions)
  }

  CreateUser(body): Observable<any> {
    return this.http.post(this.endpoint + '/api/User/Register', body, this.httpOptions)
  }

  UpdateUser(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/User/Update/${id}`, body, this.httpOptions)
  }

  DeleteUser(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/User/Delete/${id}`, this.httpOptions)
  }

  GetAllAdmin(): Observable<any> {
    return this.http.get<any>(this.endpoint + '/api/User/GetAllAdmin', this.httpOptions);
  }

  GetAllRestAdmin(Rest_Id): Observable<any> {
    return this.http.get<any>(this.endpoint + `/api/User/GetAllRestAdmin/${Rest_Id}`, this.httpOptions);
  }

  GetAllUser(): Observable<any> {
    return this.http.get<any>(this.endpoint + '/api/User/GetAll', this.httpOptions);
  }


  GetByIdUser(id): Observable<any> {
    return this.http.get<any>(this.endpoint + `/api/User/GetById/${id}`, this.httpOptions);
  }

  // GetAllUser(): Observable<User> {
  //   return this.http.get<User>(this.endpoint + '/api/User/GetAll', this.httpOptions).pipe(
  //     map(b => <User>{
  //       FullName: b.FirstName + b.LastName,
  //       statue: b.statue
  //     }),
  //     tap(classicUser => console.log(classicUser))
  //   );
  // }

  /*************************************Uploads**********************************************/

  UploadsPost(body): Observable<any> {


    const formData = new FormData();
    formData.append("myFile", body);

    return this.http.post(this.endpoint + '/api/Uploads/Post', formData, this.httpOptions)
  }

  UploadsUploadFile(body): Observable<any> {

    const formData = new FormData();
    formData.append("myFile", body);

    return this.http.post(this.endpoint + '/api/Uploads/UploadFile', formData, this.httpOptions)
  }

  UploadsUploadVideo(body): Observable<any> {

    const formData = new FormData();
    formData.append("myFile", body);

    return this.http.post(this.endpoint + '/api/Uploads/UploadVideo', formData, this.httpOptions)
  }

  /*************************************AboutUs*************************************************/

  GetAllAboutUs(): Observable<any> {
    return this.http.get(this.endpoint + '/api/AboutUs/GetAll', this.httpOptions);
  }


  GetByIdAboutUs(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/AboutUs/GetById/${id}`, this.httpOptions);
  }

  CreateAboutUs(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/AboutUs/Create`, body, this.httpOptions)
  }

  UpdateAboutUs(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/AboutUs/Update/${id}`, body, this.httpOptions)
  }

  DeleteAboutUs(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/AboutUs/Delete/${id}`, this.httpOptions)
  }

  /************************************City**************************************************/


  GetAllCity(place_Id): Observable<any> {
    return this.http.get(this.endpoint + `/api/City/GetAll/${place_Id}`, this.httpOptions);
  }


  GetByIdCity(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/City/GetById/${id}`, this.httpOptions);
  }

  CreateCity(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/City/Create`, body, this.httpOptions)
  }

  UpdateCity(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/City/Update/${id}`, body, this.httpOptions)
  }

  DeleteCity(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/City/Delete/${id}`, this.httpOptions)
  }

  /************************************ContactUs**************************************************/


  GetAllContactUs(): Observable<any> {
    return this.http.get(this.endpoint + '/api/ContactUs/GetAll', this.httpOptions);
  }


  GetByIdContactUs(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/ContactUs/GetById/${id}`, this.httpOptions);
  }

  CreateContactUs(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/ContactUs/Create`, body, this.httpOptions)
  }

  UpdateContactUs(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/ContactUs/Update/${id}`, body, this.httpOptions)
  }

  DeleteContactUs(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/ContactUs/Delete/${id}`, this.httpOptions)
  }

  /************************************MainPlace**************************************************/


  GetAllMainPlace(): Observable<any> {
    return this.http.get(this.endpoint + '/api/MainPlace/GetAll', this.httpOptions);
  }


  GetByIdMainPlace(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/MainPlace/GetById/${id}`, this.httpOptions);
  }

  CreateMainPlace(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/MainPlace/Create`, body, this.httpOptions)
  }

  UpdateMainPlace(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/MainPlace/Update/${id}`, body, this.httpOptions)
  }

  DeleteMainPlace(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/MainPlace/Delete/${id}`, this.httpOptions)
  }



  /************************************TeamMemmber**************************************************/

  GetAllTeamMemmber(statue): Observable<any> {
    return this.http.get(this.endpoint + '/api/TeamMemmber/GetAll/'+statue, this.httpOptions);
  }


  GetByIdTeamMemmber(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/TeamMemmber/GetById/${id}`, this.httpOptions);
  }

  CreateTeamMemmber(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/TeamMemmber/Create`, body, this.httpOptions)
  }

  UpdateTeamMemmber(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/TeamMemmber/Update/${id}`, body, this.httpOptions)
  }

  DeleteTeamMemmber(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/TeamMemmber/Delete/${id}`, this.httpOptions)
  }
  /**************************************Terms**************************************************/

  GetAllTerms(): Observable<any> {
    return this.http.get(this.endpoint + '/api/Terms/GetAll', this.httpOptions);
  }


  GetByIdTerms(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Terms/GetById/${id}`, this.httpOptions);
  }

  CreateTerms(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/Terms/Create`, body, this.httpOptions)
  }

  UpdateTerms(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Terms/Update/${id}`, body, this.httpOptions)
  }

  DeleteTerms(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Terms/Delete/${id}`, this.httpOptions)
  }
  /**************************************blog**************************************************/

  GetAllblog(): Observable<any> {
    return this.http.get(this.endpoint + '/api/blog/GetAll', this.httpOptions);
  }


  GetByIdblog(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/blog/GetById/${id}`, this.httpOptions);
  }

  Createblog(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/blog/Create`, body, this.httpOptions)
  }

  Updateblog(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/blog/Update/${id}`, body, this.httpOptions)
  }

  Deleteblog(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/blog/Delete/${id}`, this.httpOptions)
  }

  /**************************************Brands**************************************************/

  GetAllBrands(): Observable<any> {
    return this.http.get(this.endpoint + '/api/Brands/GetAll', this.httpOptions);
  }


  GetByIdBrands(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Brands/GetById/${id}`, this.httpOptions);
  }

  CreateBrands(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/Brands/Create`, body, this.httpOptions)
  }

  UpdateBrands(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Brands/Update/${id}`, body, this.httpOptions)
  }

  DeleteBrands(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Brands/Delete/${id}`, this.httpOptions)
  }

  
  /**************************************Cart**************************************************/

  GetAllCart(id ): Observable<any> {
    return this.http.get(this.endpoint + `/api/Cart/GetAll?user_id=${id}&statue=1`, this.httpOptions);
  }


  GetByIdCart(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Cart/GetById/${id}`, this.httpOptions);
  }

  CreateCart(body): Observable<any> {

    let formData = {};


    formData = {
      "pro_id" : body.pro_id,
      "user_id": body.user_id,
      "statue" : body.statue,
      "pro_price": body.pro_price,
     
    }

    return this.http.post(this.endpoint + `/api/Cart/Create`, formData, this.httpOptions)
  }

  UpdateCart(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Cart/Update/${id}`, body, this.httpOptions)
  }

  DeleteCart(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Cart/Delete/${id}`, this.httpOptions)
  }

   /**************************************Categories**************************************************/

   GetAllCategories(): Observable<any> {
    return this.http.get(this.endpoint + '/api/Categories/GetAll', this.httpOptions);
  }

  GetAllsub(mainCat): Observable<any> {
    return this.http.get(this.endpoint + '/api/Categories/GetAllsub/'+ mainCat, this.httpOptions);
  }


  GetByIdCategories(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Categories/GetById/${id}`, this.httpOptions);
  }

  CreateCategories(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/Categories/Create`, body, this.httpOptions)
  }

  UpdateCategories(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Categories/Update/${id}`, body, this.httpOptions)
  }

  DeleteCategories(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Categories/Delete/${id}`, this.httpOptions)
  }

    /**************************************Investment**************************************************/

    GetAllInvestment(): Observable<any> {
      return this.http.get(this.endpoint + '/api/Investment/GetAll', this.httpOptions);
    }
  
  
    GetByIdInvestment(id): Observable<any> {
      return this.http.get(this.endpoint + `/api/Investment/GetById/${id}`, this.httpOptions);
    }
  
    CreateInvestment(body): Observable<any> {
  
      return this.http.post(this.endpoint + `/api/Investment/Create`, body, this.httpOptions)
    }
  
    UpdateInvestment(body, id): Observable<any> {
  
      return this.http.put(this.endpoint + `/api/Investment/Update/${id}`, body, this.httpOptions)
    }
  
    DeleteInvestment(id): Observable<any> {
  
      return this.http.delete(this.endpoint + `/api/Investment/Delete/${id}`, this.httpOptions)
    }
  
   /**************************************Pimages**************************************************/

   GetAllPimages(pro_id,statue): Observable<any> {
    return this.http.get(this.endpoint + '/api/Pimages/GetAll?pro_id='+pro_id+'&statue='+ statue, this.httpOptions);
  }

  

  GetByIdPimages(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Pimages/GetById/${id}`, this.httpOptions);
  }

  CreatePimages(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/Pimages/Create`, body, this.httpOptions)
  }

  UpdatePimages(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Pimages/Update/${id}`, body, this.httpOptions)
  }

  DeletePimages(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Pimages/Delete/${id}`, this.httpOptions)
  }
   /**************************************products**************************************************/

   GetAllproducts(Cat_id): Observable<any> {
    return this.http.get(this.endpoint + `/api/products/GetAll/${Cat_id}`  , this.httpOptions);
  }


 

  GetProducts(): Observable<any> {
    return this.http.get(this.endpoint + '/api/products/GetAllProducts'  , this.httpOptions);
  }


  
  GetAll_products_topwww(): Observable<any> {
    return this.http.get(this.endpoint + '/api/products/GetAll_products_top'  , this.httpOptions);
  }


  GetSlider(): Observable<any> {
    return this.http.get(this.endpoint + '/api/Slider/GetAll'  , this.httpOptions);
  }

  GetByIdproducts(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/products/GetById/${id}`, this.httpOptions);
  }

  Createproducts(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/products/Create`, body, this.httpOptions)
  }

  Updateproducts(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/products/Update/${id}`, body, this.httpOptions)
  }

  Deleteproducts(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/products/Delete/${id}`, this.httpOptions)
  }
   /**************************************Wishes**************************************************/

   GetAllWishes(user_id ): Observable<any> {
    return this.http.get(this.endpoint + '/api/Wishes/GetAll/'+user_id , this.httpOptions);
  }


  GetByIdWishes(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Wishes/GetById/${id}`, this.httpOptions);
  }

  CreateWishes(body): Observable<any> {

    
    let formData = {};


    formData = {
      "pro_id" : body.pro_id,
      "user_id": body.user_id,
       
     
    }


    return this.http.post(this.endpoint + `/api/Wishes/Create`, formData, this.httpOptions)
  }

  UpdateWishes(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Wishes/Update/${id}`, body, this.httpOptions)
  }

  DeleteWishes(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Wishes/Delete/${id}`, this.httpOptions)
  }
   
  
  showSlider(): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Slider/GetAll`, this.httpOptions)
  }


  GetColors(id): Observable<any> {

    return this.http.get(this.endpoint + `/api/Colors/GetAll/${id}`, this.httpOptions)
  }


  GetPimages(id): Observable<any> {
  
    return this.http.get(this.endpoint + `/api/Pimages/GetAll?pro_id=${id}&statue=1`, this.httpOptions)
  }

  GetSizes(id): Observable<any> {
  
    return this.http.get(this.endpoint + `/api/Sizes/GetAll?pro_id=${id}&Size_Cat=0`, this.httpOptions)
  }









  /************************************************** Home  **********************************************/

  GetHomeData(): Observable<any> {
    return this.http.get<any>(this.endpoint + 'Home/home', this.httpOptions);
  }
  GetHomeData2(): Observable<any> {
    return this.http.get(this.endpoint + `Home/home`  , this.httpOptions);
  }

}
