import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ],
  declarations: [CompaniesComponent]
})
export class CompaniesModule { }
