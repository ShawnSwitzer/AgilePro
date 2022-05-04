import { Component, OnInit } from '@angular/core';
import { TaskstorageService } from '../taskstorage.service';
import { Tasks } from '../tasks';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import { throws } from 'assert';
import { Location } from '@angular/common';
import { Database, ref, set } from '@angular/fire/database';
import { remove, update } from 'firebase/database';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Tasks[] = [];
  taskID: number = 0; //impelemnt better approach later
  

  constructor(private taskStorageService: TaskstorageService, private location: Location, public database: Database) { }

  ngOnInit(): void {
    this.fetchData();
  }

  registerTask(value: any){
    set(ref(this.database, 'tasks/' + value.title),
    {
      title: value.title,
      description: value.description,
      dueDate: value.dueDate
    });
  }

  updateTask(value: any){
    update(ref(this.database, 'tasks/' + value.title),
    {
      title: value.newtitle,
      description: value.description,
      dueDate: value.dueDate
    });
  }

  deleteTask(value: any){
    remove(ref(this.database, 'tasks/' + value.title));
  }



/*Add a task to the database */
  addTask(taskTitle: string, taskDescription: string, taskDueDate: string){
    if( !taskTitle) {return;} //Title is required so cancel add method
    const newTask: Tasks ={
      id: this.genId(this.tasks),
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate
    }

    this.taskStorageService
    .addNewTasks(newTask)
    .subscribe((data) => console.log(data));
    this.fetchData(); //update tasks array
    this.fetchData();
  }
  /*Create an id for the tast
  should ensure a unique ID even if tasks are added in sperate sessions
  */
  genId(tasks: Tasks[]): number {
    return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
  }

/*Name is required */
titleFormControl = new FormControl('', [Validators.required]);


  /*Retrieves data from database and assigns it to tasks array */
  fetchData(){
    this.taskStorageService.getTasks().subscribe((data) => {
      this.tasks = data;
    })
  }

  deleteAllTasks(){
    this.taskStorageService.deleteTasks().subscribe();
  }

  goBack(){
    this.location.back();
  }
}