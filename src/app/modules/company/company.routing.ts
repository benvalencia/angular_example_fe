import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {LayoutComponent} from '../clients/layout/layout.component';
import {CompaniesAdminComponent} from './companies-admin/companies-admin.component';

const COMPANY_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/app/company',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CompanyComponent,
        pathMatch: 'full'
      },
      {
        path: 'admin',
        component: CompaniesAdminComponent,
        pathMatch: 'full'
      },
    ]
  },
];

export const companyRoutes = RouterModule.forChild(COMPANY_ROUTES);
