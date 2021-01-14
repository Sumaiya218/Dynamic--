import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PricesComponent } from './prices/prices.component';
import { PartnersComponent } from './partners/partners.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { BeDistributorComponent } from './be-distributor/be-distributor.component';
import { NearestDistributorComponent } from './nearest-distributor/nearest-distributor.component';
import { OrderSupportComponent } from './order-support/order-support.component';
import { CommonquestionsComponent } from './commonquestions/commonquestions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { TryComponent } from './try/try.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Ele3dadComponent } from './ele3dad/ele3dad.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AgreementComponent } from './agreement/agreement.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { MoreComponent } from './more/more.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { SubmitComponent } from './submit/submit.component';
import { CompleteComponent } from './complete/complete.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RecordComponent } from './record/record.component';
import { ClientComponent } from './client/client.component';
import { CommonComponent } from './common/common.component';
import { UpperComponent } from './upper/upper.component';
import { NewComponent } from './new/new.component';
import { MoreclientsComponent } from './moreclients/moreclients.component';
import { AccountingComponent } from './accounting/accounting.component';
import { EmployeesComponent } from './employees/employees.component';
import { SalesComponent } from './sales/sales.component';
import { MushtrayatComponent } from './mushtrayat/mushtrayat.component';
import { CustomersServiceComponent } from './customers-service/customers-service.component';
import { DafaterProjectsComponent } from './dafater-projects/dafater-projects.component';
import { ManufacturingProgramComponent } from './manufacturing-program/manufacturing-program.component';
import { StoresComponent } from './stores/stores.component';
import { DeSupportComponent } from './de-support/de-support.component';
import { RecordPartnerComponent } from './record-partner/record-partner.component';
import { EnterComponent } from './enter/enter.component';
import { ForgetComponent } from './forget/forget.component';
import { ToastrModule } from 'ngx-toastr';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TourComponent,
    AdvantagesComponent,
    SolutionsComponent,
    PricesComponent,
    PartnersComponent,
    
    ServicesComponent,
    FooterComponent,
    BeDistributorComponent,
    NearestDistributorComponent,
    OrderSupportComponent,
    CommonquestionsComponent,
    UserComponent,
    TryComponent,
    Ele3dadComponent,
    AgreementComponent,
    CalculationsComponent,
    MoreComponent,
    JobsComponent,
    ContactComponent,
    SubmitComponent,
    CompleteComponent,
    ContactusComponent,
    RecordComponent,
    ClientComponent,
    CommonComponent,
    UpperComponent,
    NewComponent,
    MoreclientsComponent,
    AccountingComponent,
    EmployeesComponent,
    SalesComponent,
    MushtrayatComponent,
    CustomersServiceComponent,
    DafaterProjectsComponent,
    ManufacturingProgramComponent,
    StoresComponent,
    DeSupportComponent,
    RecordPartnerComponent,
    EnterComponent,
    ForgetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    RecaptchaModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    NzBackTopModule,
    BrowserAnimationsModule,
    
    FormsModule,
    
    HttpClientModule
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
