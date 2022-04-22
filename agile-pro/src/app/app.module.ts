import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { TaskComponent } from './task/task.component';
import { NewUserStoryComponent } from './new-user-story/new-user-story.component';
import { MemberFormComponent } from './member-form/member-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserStoryComponent,
    TaskComponent,
    NewUserStoryComponent,
    MemberFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
