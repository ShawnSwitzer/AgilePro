import { Component, OnInit } from '@angular/core';
import { TaskstorageService } from '../taskstorage.service';
import { Tasks } from '../tasks';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Tasks[] = [];
  taskID: number = 0; //impelemnt better approach later

  constructor(private taskStorageService: TaskstorageService) { }

  ngOnInit(): void {
    this.fetchData();
  }


  /*Get the tasks from the database */
  /* Use fetchData() instead */
  // getTasks(): void{
  //   this.taskStorageService.getTasks()
  //     .subscribe(tasks => this.tasks = tasks);
  // }

/*Add a task to the database */
  addTask(taskTitle: string, taskDescription: string){
    const newTask: Tasks ={
      id: ++this.taskID,
      title: taskTitle,
      description: taskDescription,
    }

    this.taskStorageService
    .addNewTasks(newTask)
    .subscribe((data) => console.log(data));
    this.fetchData(); //update tasks array
  }

  /*Retrieves data from database and assigns it to tasks array */
  fetchData(){
    this.taskStorageService.getTasks().subscribe((data) => {
      this.tasks = data;
    })
  }
}