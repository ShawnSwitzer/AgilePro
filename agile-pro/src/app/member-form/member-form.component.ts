import { Component, OnInit } from '@angular/core';
import { MemberstorageService } from '../memberstorage.service';
import { Members } from '../members';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  memList: Members[] = [];
  nextID: number = 0;
  memName: string ='';
  memRole: string = '';


  constructor(private memStorage: MemberstorageService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  addNewMember(){
    const newMember: Members = {
      id: this.nextID++,
      name: this.memName,
      role: this.memRole
    };

    this.memStorage.addNewMember(newMember).subscribe((data) => this.fetchData);
  }

  fetchData() {
    this.memStorage.getMembers().subscribe((data) => this.memList = data);
  }

}
