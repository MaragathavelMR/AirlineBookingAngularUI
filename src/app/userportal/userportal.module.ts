import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GridComponent } from '../utility/utility.gridcomponent';
import { GridUtiliyModule } from '../utility/utility.module';
import { UserPortalComponent } from './userportal.component';



@NgModule({
  declarations: [
    UserPortalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridUtiliyModule,    
  ],
  providers: [],
  bootstrap: [UserPortalComponent]
})
export class UserportalModule { }