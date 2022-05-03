import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { TaskstorageService } from '../taskstorage.service';
import { UserStories } from '../userstories';
import { UserstoryService } from '../userstory.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Members } from '../members';
import { MemberstorageService } from '../memberstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskList: Tasks[] = [];
  sprintLog: Tasks[] = [];
  completeLog: Tasks[] = [];
  userStoryLog: UserStories[] = [];
  memberLog: Members[] = [];


  constructor(private taskStorage: TaskstorageService, private uStorage: UserstoryService, private memStorage: MemberstorageService ) { }


  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks()
  {
    this.taskStorage.getTasks().subscribe((data) => {
      this.taskList = data;
    })
    this.uStorage.getStories().subscribe((data) => {this.userStoryLog = data});
    this.memStorage.getMembers().subscribe((data) => {this.memberLog = data});
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1);
    }

    return value;
  }
  
}
