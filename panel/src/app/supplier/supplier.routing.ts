import { Routes } from '@angular/router';

import { ListsupplierComponent } from './listsupplier/listsupplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { EditsupplierComponent } from './editsupplier/editsupplier.component';

export const SupplierRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: 'listsupplier', 
      component: ListsupplierComponent
    },{
      path: 'addsupplier', 
      component: AddsupplierComponent
    },{
      path: 'edidsupplier', 
      component: EditsupplierComponent
    }]
  }
];