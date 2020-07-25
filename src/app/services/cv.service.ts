import { Injectable } from '@angular/core';

import { Person } from '../person';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  name: string

  pers = new Person(0,'','','',0,0,'','../../assets/images/developer.png','../../assets/images/coverDev.png')

  pers1 = new Person(1,'Rabii','Hlioui','rabiihlioui@gmail.com',60,15786937,'Software Engineer','../../assets/images/rabiiHlioui.png','../../assets/images/coverRabii.png')
  pers2 = new Person(2,'Lionel','Messi','lionelmessi@yahoo.fr',120,94557937,'Footballer','../../assets/images/lionelMessi.png','../../assets/images/coverLionel.png')
  pers3 = new Person(3,'Emna','Mejri','mejriemna@yandex.com',30,63339411,'Secretary','../../assets/images/imenMejri.png','../../assets/images/coverImen.png')
  pers4 = new Person(4,'Slimen','Labyedh','slimenfreud@hotmail.com',40,76945137,'Psychotherapist','../../assets/images/slimenLabyedh.png','../../assets/images/coverSlimen.png')

  cvList = [
    this.pers,
    this.pers1,
    this.pers2,
    this.pers3,
    this.pers4
  ]

  constructor() { }

  retrievePersById(id: number) {
    const long = this.cvList.length;
    for (let i = 0; i < long; i++) {
      if ( id == i ) {
        return this.cvList[i];
      }
    }
  }

  deleteCv(id: number) {
    this.cvList.forEach(cv => {
      if ( cv.id == id ) {
        this.cvList.splice(this.cvList.indexOf(cv),1)
      }
    });
  }

  getCvDetails(id: number): any {
    this.cvList.forEach(cv => {
      if ( cv.id == id ) {
        return cv;
      }
    });
  }

  addCV(person: Person) {
    person.id = this.cvList[this.cvList.length - 1].id + 1
    person.picture = '../../assets/images/newPerson.png'
    this.cvList.push(person); 
  }

}
