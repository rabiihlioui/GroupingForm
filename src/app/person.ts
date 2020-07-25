export class Person {
    id: number;
    name: string;
    firstname: string;
    email: string
    age: number;
    cin: number;
    job: string;
    picture: string;
    cover: string;
    constructor(id: number = 0,
                name: string = '',
                firstname: string = '',
                email: string = '',
                age: number = 0,
                cin: number = 0,
                job: string = '',
                picture: string = '',
                cover: string) {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.email = email;
      this.age = age;
      this.cin = cin;
      this.job = job;
      this.picture = picture;
      this.cover = cover;
    }
}
