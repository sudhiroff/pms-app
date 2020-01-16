import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { CustomersComponent } from './pages/customers/customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './containers/material.module';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { EndPointService } from './shared/end-point.service';
import { ItemsComponent } from './pages/items/items.component';
import { ProductFormulationComponent } from './pages/product-formulation/product-formulation.component';
import { TrialReportComponent } from './pages/trial-report/trial-report.component';
import { IssueTrackersComponent } from './pages/issue-trackers/issue-trackers.component';
import { ProductCostCalcComponent } from './pages/product-cost-calc/product-cost-calc.component';
import { ProductionTrackerComponent } from './pages/production-tracker/production-tracker.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ConfirmBoxComponent } from './shared/confirm-box/confirm-box.component';
import { AddItemComponent } from './pages/add-item/add-item.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    CustomersComponent,
    AddCustomerComponent,
    ItemsComponent,
    ProductFormulationComponent,
    TrialReportComponent,
    IssueTrackersComponent,
    ProductCostCalcComponent,
    ProductionTrackerComponent,
    ReportsComponent,
    ConfirmBoxComponent,
    AddItemComponent
  ],
  providers: [
    EndPointService
    //   {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // }
  ],
  entryComponents: [
    AddCustomerComponent,
    AddItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
