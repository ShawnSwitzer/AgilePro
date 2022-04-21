import { Injectable } from '@angular/core';
import { Members } from './members';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberstorageService {

  constructor(private http: HttpClient ) { }
}
