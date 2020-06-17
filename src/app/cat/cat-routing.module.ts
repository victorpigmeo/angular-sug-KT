import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatComponent} from './cat.component';
import {CatListComponent} from './cat-list/cat-list.component';


const routes: Routes = [
  {
    path: '',
    component: CatComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
