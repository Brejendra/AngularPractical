import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  tasks=[ "plan the weekend!",
         "Plan the wekdayt nerwe!"
       ]
       addTask=function()
       {
         console.log(this.currentTask)
         this.tasks.push(this.currentTask)
         this.currentTask=""
       }
       changeTaskStatus=function(ct)
       {
         console.log("Cahngiignfdb sdtatsid :"+this.tasks[ct])
         this.tasks.splice(ct,1)
        
       }
  constructor() { }

  ngOnInit() {
  }

}
