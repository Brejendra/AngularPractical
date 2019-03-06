import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import{HttpClientModule} from "@angular/common/http"



import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { SonComponent } from './family/son/son.component';
import { DaugtherComponent } from './family/daugther/daugther.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { TemplatefromComponent } from './forms/templatefrom/templatefrom.component';
import {ReactivefromsComponent} from './forms/reactivefroms/reactivefroms.component';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { InvalidComponent } from './invalid/invalid.component';
import { TaskmanagerComponent } from './Task/taskmanager/taskmanager.component';
import { LocalServiceComponent } from './consume/local-service/local-service.component';
import { LocalService2Component } from './consume/local-service2/local-service2.component';
import { RemoteApiComponent } from './consume/remote-api/remote-api.component';
import { ViewUserDetailComponent } from './consume/view-user-detail/view-user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    DaugtherComponent,
    ForDirectiveComponent,
    TemplatefromComponent,
    ReactivefromsComponent,
    InvalidComponent,
    TaskmanagerComponent,
    LocalServiceComponent,
    LocalService2Component,
    RemoteApiComponent,
    ViewUserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
       path:'templatefrom',
       component:TemplatefromComponent
      },
      {
       path:'reactivefroms',
       component:ReactivefromsComponent
      },
      {
        path:'taskmanager',
        component:TaskmanagerComponent
      },
      {
        path:'local',
        component:LocalServiceComponent
      },
      {
        path:'local2',
        component:LocalService2Component
      },
      {
        path:'remote',
        component:RemoteApiComponent
      },
      {
        path:'viewuser/:myid',
        component:ViewUserDetailComponent
      },
      {
        path:'**',
        component:InvalidComponent
      }
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
