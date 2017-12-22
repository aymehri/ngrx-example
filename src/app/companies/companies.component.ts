import { Component, OnInit } from '@angular/core';

import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
  selector: 'ngrx-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Array<Company>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(result => this.companies =  result);
  }

}
