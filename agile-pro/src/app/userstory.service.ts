import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserStories } from './userstories';
import { Observable, of, catchError } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class UserstoryService {

  userStories$!: Observable<UserStories[]>;
  log: any;
  
  constructor(private http: HttpClient) { }



  getAllStories(): Observable<UserStories[]> {
    return this.http.get<UserStories[]>('https://userstories-3def5-default-rtdb.firebaseio.com/' + 'userstories.json').pipe(
      map((responseData) => {
        const usList: UserStories[] = [];
        for (const key in responseData) usList.push(responseData[key]); return usList;
      }),
      catchError(this.handleError<UserStories[]>('getAllStories', [])
    ));
  }

  //get a single story
  getStory(userId: number):Observable<UserStories> {
    return this.http.get<UserStories>('https://userstories-3def5-default-rtdb.firebaseio.com/' + 'userstories.json').pipe(
      catchError(this.handleError<UserStories>('getStory userId=${userId}'))
    );
  }

  //Create UserStory
  addNewStory(newStory: UserStories): Observable<UserStories> {
    // console.log(this.http.post<UserStories>(url, newStory));
    return this.http.post<UserStories>('https://userstories-3def5-default-rtdb.firebaseio.com/' + 'userstories.json', newStory).pipe(
      catchError(this.handleError<UserStories>('addNewStory'))
    );
  }

  //Delete a UStory
  deleteUStory(userId: number): Observable<UserStories> {
    return this.http.delete<UserStories>('https://userstories-3def5-default-rtdb.firebaseio.com/' + 'userstories.json').pipe(
      catchError(this.handleError<UserStories>('deleteUStory'))
    );
  }

  

  public handleError<T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
