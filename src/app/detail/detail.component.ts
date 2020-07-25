import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Person } from '../person';
import { HiringService } from '../services/hiring.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() person: Person

  pers: Person

  cover: string

  constructor(
    private hiringService: HiringService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.pers = this.person
  }

  hireCv() {
    this.hiringService.hireCv(this.pers)
  }

  goToCvDetails() {
    this.router.navigate(['this.pers.id/cvDetails', this.pers.id])
  }

}
