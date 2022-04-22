import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserStoryComponent } from './new-user-story/new-user-story.component';
import { TaskComponent } from './task/task.component';
import { UserStoryComponent } from './user-story/user-story.component';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
