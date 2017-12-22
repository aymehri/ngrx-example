import { Component, OnInit } from '@angular/core';
import { Company } from './company';

@Component({
  selector: 'ngrx-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Array<Company>;

  constructor() { }

  ngOnInit() {
  }

}
