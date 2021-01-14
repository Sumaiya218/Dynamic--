import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PricesComponent } from './prices/prices.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { BeDistributorComponent } from './be-distributor/be-distributor.component';
import { NearestDistributorComponent } from './nearest-distributor/nearest-distributor.component';
import { OrderSupportComponent } from './order-support/order-support.component';
import { CommonquestionsComponent } from './commonquestions/commonquestions.component';
import { UserComponent } from './user/user.component';
import { TryComponent } from './try/try.component';
import { Ele3dadComponent } from './ele3dad/ele3dad.component';
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

const routes: Routes = [
  {path: '' , redirectTo:'home' , pathMatch:'full'},
  {path: 'home' , component:HomeComponent},
  {path: 'forget' , component:ForgetComponent},
  {path: 'record-partner' , component:RecordPartnerComponent},
  {path: 'manufacturing-program' , component:ManufacturingProgramComponent},
  {path: 'customers-service' , component:CustomersServiceComponent},
  {path: 'Stores' , component:StoresComponent},
  {path: 'enter' , component:EnterComponent},
  {path: 'de-support' , component:DeSupportComponent},
  {path: 'employees' , component:EmployeesComponent},
  {path: 'dafater-projects' , component:DafaterProjectsComponent},
  {path: 'mushtrayat' , component:MushtrayatComponent},
  {path: 'sales' , component:SalesComponent},
  {path: 'accounting' , component:AccountingComponent},
  {path: 'moreclients' , component:MoreclientsComponent},
  {path: 'tour' , component:TourComponent},
  {path: 'new' , component:NewComponent},
  {path: 'upper' , component:UpperComponent},
  {path: 'common' , component:CommonComponent},
  {path: 'client' , component:ClientComponent},
  {path: 'record' , component:RecordComponent},
  {path: 'contactus' , component:ContactusComponent},
  {path: 'complete' , component:CompleteComponent},
  {path: 'submit' , component:SubmitComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'jobs' , component:JobsComponent},
  {path: 'more' , component:MoreComponent},
  {path: 'try' , component:TryComponent},
  {path: 'user' , component:UserComponent},
  {path: 'calculations' , component:CalculationsComponent},
  {path: 'agreement' , component:AgreementComponent},
  {path: 'order-support' , component:OrderSupportComponent},
  {path: 'nearest-distributor' , component: NearestDistributorComponent},
  {path: 'services' , component:ServicesComponent},
  {path: 'be-distributer' , component:BeDistributorComponent},
  {path: 'prices' , component:PricesComponent},
  {path: 'partners' , component:PartnersComponent},
  {path: 'ele3dad' , component:Ele3dadComponent},
  {path: 'commonquestions' , component:CommonquestionsComponent},
  {path: 'advantages' , component:AdvantagesComponent},
  {path: 'solutions' , component: SolutionsComponent},
  {path: '**' , redirectTo:'index' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
