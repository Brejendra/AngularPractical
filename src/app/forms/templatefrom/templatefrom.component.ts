import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatefrom',
  templateUrl: './templatefrom.component.html',
  styleUrls: ['./templatefrom.component.css']
})
export class TemplatefromComponent implements OnInit {
  
  addHobby=function(hf)
    {
    console.log("Hobby captured!!"+hf)
    console.log(hf)
    }

  constructor() { }

  ngOnInit() {
  }

}
