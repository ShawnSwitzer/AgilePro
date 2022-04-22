import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserStories } from './userstories';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {

  constructor(private http: HttpClient) { }

  addNewTasks(newUS: UserStories) {
    return this.http.post('https://userstories-3def5-default-rtdb.firebaseio.com/' + 'userstories.json', newUS);
  }

  getTasks() {
    return this.http.get<UserStories[]>('https://userstories-3def5-default-rtdb.firebaseio.com/' + 'userstories.json').pipe(map((responseData) => {
      const usList: UserStories[] = [];
      for (const key in usList) usList.push(responseData[key]); return usList;
    }))
}
}
