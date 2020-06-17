import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatRoutingModule} from './cat-routing.module';
import {CatComponent} from './cat.component';
import {CatListComponent} from './cat-list/cat-list.component';


@NgModule({
  declarations: [CatComponent, CatListComponent],
  imports: [
    CommonModule,
    CatRoutingModule
  ]
})
export class CatModule { }
