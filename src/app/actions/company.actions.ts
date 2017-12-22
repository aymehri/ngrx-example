import { Action } from '@ngrx/store';
import { Company } from '../companies/company';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';

export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';

export const UPDATE_COMPANY = 'ADD_COMPANY';
export const UPDATE_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';

export class LoadCompaniesAction implements Action {
  readonly type = LOAD_COMPANIES;
  constructor() { }
}

export class LoadCompaniesSuccessAction implements Action {
  readonly type = LOAD_COMPANIES_SUCCESS;
  constructor(public payload: Company[]) { }
}

export class DeleteCompanyAction implements Action {
  readonly type = DELETE_COMPANY;
  constructor(public payload: number) { }
}

export class DeleteCompanySuccessAction implements Action {
  readonly type = DELETE_COMPANY_SUCCESS;
  constructor(public payload: number) { }
}

export class AddCompanyAction implements Action {
  readonly type = ADD_COMPANY;
  constructor(public payload: Company) { }
}

export class AddCompanySuccessAction implements Action {
  readonly type = ADD_COMPANY_SUCCESS;
  constructor(public payload: Company) { }
}

export class UpdateCompanyAction implements Action {
  readonly type = UPDATE_COMPANY;
  constructor(public payload: Company) { }
}

export class UpdateCompanySuccessAction implements Action {
  readonly type = UPDATE_COMPANY_SUCCESS;
  constructor(public payload: Company) { }
}

export type Actions
  = LoadCompaniesAction
  | LoadCompaniesSuccessAction
  | DeleteCompanyAction
  | DeleteCompanySuccessAction;

