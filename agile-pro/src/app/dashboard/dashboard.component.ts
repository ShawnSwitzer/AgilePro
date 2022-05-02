import { Component, Input, OnInit } from '@angular/core';
import { Members } from '../members';
import { MemberstorageService } from '../memberstorage.service';
import { Tasks } from '../tasks';
import { TaskstorageService } from '../taskstorage.service';
import { UserStories } from '../userstories';
import { UserstoryService } from '../userstory.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskList: Tasks[] = [];
  sprintLog: Tasks[] = [];
  completeLog: Tasks[] = [];


  constructor(private taskStorage: TaskstorageService) { }


  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks()
  {
    this.taskStorage.getTasks().subscribe((data) => {
      this.taskList = data;
    })
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

}
