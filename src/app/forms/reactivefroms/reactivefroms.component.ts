import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from "@angular/forms"
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-reactivefroms',
  templateUrl: './reactivefroms.component.html',
  styleUrls: ['./reactivefroms.component.css']
})
export class ReactivefromsComponent implements OnInit {

  rHobbyForm
  
  constructor() { }
  addHobby=function(hf)
  {
    console.log(hf)
  }
  ngOnInit() {
    this.rHobbyForm=new FormGroup(
      {fname:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)])),
      //Sname:new FormControl("",Validators.compose([Validators.pattern('^[a-zA-Z]+$'),Validators.required])),
      Sname:new FormControl("",this.lastnamevalid),
      SSName:new FormControl()
    }
    )
  }
  lastnamevalid=function(control){
    if(control.value.length<4){
      return{'Sname':true}
    }
  }

}
