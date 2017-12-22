import { Injectable } from '@angular/core';
import { CompanyService } from '../companies/company.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as companyActions from './../actions/company.actions';
import { DeleteCompanySuccessAction } from '../actions/company.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';

@Injectable()
export class CompanyEffects {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) { }

  @Effect() loadCompanies$ = this.actions$
    .ofType(companyActions.LOAD_COMPANIES)
    .switchMap(() => {
      return this.companyService.getCompanies()
        .map(companies => new companyActions.LoadCompaniesSuccessAction(companies));
    });

  @Effect() deleteCompany$ = this.actions$
    .ofType(companyActions.DELETE_COMPANY)
    .switchMap((action: companyActions.DeleteCompanyAction) => {
      return this.companyService.deleteCompany(action.payload)
        .map(company => new companyActions.DeleteCompanySuccessAction(company.id));
    });

}
