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
    if (this.itemId == 1) {
      this.pers = this.retrievePersById(1)
    }
    else if (this.itemId == 2) {
      this.pers = this.retrievePersById(2)
    }
    else if (this.itemId == 3){
      this.pers = this.retrievePersById(3)
    }
    else {
      this.pers = this.retrievePersById(4)
    }
  }

  // Use of the service the retrieve the Person by the id
  retrievePersById(id: number) {
    return this.cvService.retrievePersById(id)
  }

}
