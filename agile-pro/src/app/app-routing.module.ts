import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberInputComponent } from './member-input/member-input.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
