import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  chosenItemId: Person

  @Output() chosenId = new EventEmitter()
  
  ids = []

  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.initializeIds()
  }

  chosenItem(itemId){
    this.chosenItemId = itemId
    this.chosenId.emit(
      this.chosenItemId
    )
  }

  initializeIds() {
    for (let i = 1; i < this.cvService.cvList.length; i++) {
      this.ids.push(i)      
    }
  }

}
