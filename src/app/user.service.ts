import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user={"firstName":"Sindhu","lastName":"Parshi","email":"sindhu.parshi@gmail.com","password":"456"};

  getUser(){
    return this.user;
  }
}
