import { Component, OnInit } from '@angular/core';
import { TaskstorageService } from '../taskstorage.service';
import { Tasks } from '../tasks';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import { throws } from 'assert';
import { Location } from '@angular/common';
import { Database, ref, set } from '@angular/fire/database';
import { remove, update } from 'firebase/database';
import { Members } from '../members';
import { MemberstorageService } from '../memberstorage.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Tasks[] = [];
  memberList: Members[] = [];
  //taskID: number = Math.floor(Math.random() * (1000000 + 1)); //impelemnt better approach later
  

  constructor(private taskStorageService: TaskstorageService, private location: Location, private memberStorageService: MemberstorageService, public database: Database) { }

  ngOnInit(): void {
    this.fetchData();
  }

  registerTask(value: any){
    const taskID = Math.floor(Math.random() * (1000000 + 1));
    set(ref(this.database, 'tasks/' + taskID),
    {
      id: taskID,
      title: value.title,
      description: value.description,
      dueDate: value.dueDate,
      memberAssign: value.memberAssign
    });
    this.fetchData();
  }

  updateTask(value: any){
    update(ref(this.database, 'tasks/' + value.taskID),
    {
      id: value.taskID,
      title: value.newtitle,
      description: value.description,
      dueDate: value.dueDate,
      memberAssign: value.memberAssign
    });
    this.fetchData();
  }

  deleteTask(value: any){
    remove(ref(this.database, 'tasks/' + value.taskID));
    this.fetchData();
  }



/*Add a task to the database */
  addTask(taskTitle: string, taskDescription: string, taskDueDate: string, taskAssignment: string){
    if( !taskTitle) {return;} //Title is required so cancel add method
    const newTask: Tasks ={
      id: this.genId(this.tasks),
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
      memberAssign: taskAssignment
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
    this.memberStorageService.getMembers().subscribe((data) => {
      this.memberList = data;
    })
  }

  deleteAllTasks(){
    this.taskStorageService.deleteTasks().subscribe();
  }

  goBack(){
    this.location.back();
  }
}