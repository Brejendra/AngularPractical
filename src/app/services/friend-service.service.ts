import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendServiceService {
  cabService=['ola','Bhema','zomm']
 
  sayHello()
  {
    return "Welcome to the cab service API!!!"
  }
  welcome()
  {
    console.log("Welcome to the cab service")
  }

  constructor() { }
}
