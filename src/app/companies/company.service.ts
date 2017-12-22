import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getCurrentCrise(): Observable<Company> {
    return this.http.get<Company>(this.API_BASE);
  }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.API_BASE}/company/${companyId}`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Array<Company>>(`${this.API_BASE}/company`);
  }

  deleteCompany(companyId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`);
  }

  addCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), {});
  }

  updateCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    return this.http.put(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), {});
  }

}
