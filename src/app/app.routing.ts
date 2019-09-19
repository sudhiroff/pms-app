import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ItemsComponent } from './pages/items/items.component';
import { ProductFormulationComponent } from './pages/product-formulation/product-formulation.component';
import { TrialReportComponent } from './pages/trial-report/trial-report.component';
import { IssueTrackersComponent } from './pages/issue-trackers/issue-trackers.component';
import { ProductCostCalcComponent } from './pages/product-cost-calc/product-cost-calc.component';
import { ReportsComponent } from './pages/reports/reports.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  }, 
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [      
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'customer',
        component: CustomersComponent,
        data: {
          title: 'Customers'
        }
      },
      {
        path: 'items',
        component: ItemsComponent,
        data: {
          title: 'Items'
        }
      },
      {
        path: 'product-fromulation',
        component: ProductFormulationComponent,
        data: {
          title: 'Product Formulation'
        }
      },
      {
        path: 'trial-report',
        component: TrialReportComponent,
        data: {
          title: 'Trial Report'
        }
      },
      {
        path: 'issue-trackers',
        component: IssueTrackersComponent,
        data: {
          title: 'Issue trackers'
        }
      },
      {
        path: 'prod-cost-calc',
        component: ProductCostCalcComponent,
        data: {
          title: 'Product Cost Calculator'
        }
      },
      {
        path: 'production-tracker',
        component: ProductFormulationComponent,
        data: {
          title: 'Production Tracker'
        }
      },
      {
        path: 'reports',
        component: ReportsComponent,
        data: {
          title: 'Reports'
        }
      }
      // {
      //   path: 'base',
      //   loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      // },
      // {
      //   path: 'notifications',
      //   loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      // },
      // {
      //   path: 'theme',
      //   loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      // }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
