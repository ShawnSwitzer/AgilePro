import { Injectable } from '@angular/core';
import { Members } from './members';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberstorageService {

  constructor(private http: HttpClient) { }

  addNewMember(newMem: Members) {
    return this.http.post('https://members-de5fc-default-rtdb.firebaseio.com/' + 'members.json', newMem);
  }

  getMembers() {
    return this.http.get<Members[]>('https://members-de5fc-default-rtdb.firebaseio.com/' + 'members.json').pipe(map((responseData) => {
      const memberList: Members[] = [];
      for (const key in responseData) memberList.push(responseData[key]); return memberList;
    }))
  }
}
