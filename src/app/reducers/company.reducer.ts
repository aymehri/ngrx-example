import * as fromCompanies from './../actions/company.actions';
import { Company } from './../companies/company';

export interface State {
  companies: Company[];
}

const initialState: State = {
  companies: []
};

export function companyReducer(state = initialState, action: fromCompanies.Actions): State {
  switch (action.type) {
    case fromCompanies.LOAD_COMPANIES_SUCCESS: {
      return state = {
        companies: action.payload
      };
    }
    case fromCompanies.DELETE_COMPANY_SUCCESS: {
      return state = {
        companies: state.companies.filter(company => company.id !== action.payload)
      };
    }
    case fromCompanies.ADD_COMPANY_SUCCESS: {
      state.companies.push(action.payload);
      return state = {
        companies: state.companies
      };
    }
    default: {
      return state;
    }
  }
}
