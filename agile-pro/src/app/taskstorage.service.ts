import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskstorageService {

  constructor(private http: HttpClient) { }

  addNewTasks(newTask: Tasks) {
    return this.http.post('https://tasks-ed88e-default-rtdb.firebaseio.com/' + 'tasks.json', newTask);
  }

  getTasks() {
    return this.http.get<Tasks[]>('https://tasks-ed88e-default-rtdb.firebaseio.com/' + 'tasks.json').pipe(map((responseData) => {
      const taskList: Tasks[] = [];
      for (const key in taskList) taskList.push(responseData[key]); return taskList;
    }))
}
}
