import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {WorkersComponent} from './workers/workers.component';
import {LayoutComponent} from './layout/layout.component';

const CLIENTS_ROUTES: Routes = [
   {
     path: '',
     redirectTo: '/app/clients',
     pathMatch: 'full'
   },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ContactsComponent,
        pathMatch: 'full'
      },
      {
        path: 'workers',
        component: WorkersComponent,
        pathMatch: 'full'
      },
    ]
  },
];

export const clientsRoutes = RouterModule.forChild(CLIENTS_ROUTES);
