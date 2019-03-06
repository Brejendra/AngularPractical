import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remote-api',
  templateUrl: './remote-api.component.html',
  styleUrls: ['./remote-api.component.css']
})
export class RemoteApiComponent implements OnInit {

  constructor(private rest:RestapiService,private router:Router) { }
  allUsers:any
  ngOnInit() 
  {
    this.rest.getRemoteData().subscribe((res)=>
    {
      this.allUsers=res
      console.log(this.allUsers)
    })
  }
  viewUser=function(index)
  {
    console.log("uer at " +index)
    console.log(this.allUsers[index])
    //navigate to new route
    //this will be called
    this.router.navigate(["/viewuser",index])
  }

}
