import { AppState } from './appState';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CompanyService } from './company.service';
import { Company } from './company';
import { Store } from '@ngrx/store';

import * as companyActions from './../actions/company.actions';

@Component({
  selector: 'ngrx-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies$: Observable<Array<Company>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadCompanies();
    this.companies$ = this.store.select(state => state.companies.companies);
  }

  loadCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  delete(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}
