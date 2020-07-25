import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() itemId: number

  @Output() chosenItem = new EventEmitter()

  pic; name; firstName: string

  pers: Person

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.initiateDetail()
    this.initiateItem()
  }

  initiateDetail() {
    this.chosenItem.emit(
      this.retrievePersById(0)
    )
  }

  initiateItem() {
    this.initiatePers()
    this.pic = this.pers.picture
    this.name = this.pers.name
    this.firstName = this.pers.firstname
  }

  getItemId(){
    this.initiatePers()
    this.chosenItem.emit(
      this.pers
    )
  }

  initiatePers() {
    for (let i = 1; i < this.cvService.cvList.length; i++) {
      if (this.itemId == i) {
        this.pers = this.retrievePersById(i)
      }
    }
  }

  // Use of the service the retrieve the Person by the id
  retrievePersById(id: number) {
    return this.cvService.retrievePersById(id)
  }

}
