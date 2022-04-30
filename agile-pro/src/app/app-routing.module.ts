import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberInputComponent } from './member-input/member-input.component';
import { NewUserStoryComponent } from './new-user-story/new-user-story.component';
import { TaskComponent } from './task/task.component';
import { UserStoryComponent } from './user-story/user-story.component';

const routes: Routes = [
  {path: 'members', component: MemberInputComponent},
  {path: 'userstories', component: UserStoryComponent},
  {path: 'newuserstory', component: NewUserStoryComponent},
  {path: 'tasks', component: TaskComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
