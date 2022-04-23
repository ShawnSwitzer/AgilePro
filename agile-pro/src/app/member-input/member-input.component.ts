import { Component, OnInit } from '@angular/core';
import { MemberstorageService } from '../memberstorage.service';
import { Members } from '../members';
@Component({
  selector: 'app-member-input',
  templateUrl: './member-input.component.html',
  styleUrls: ['./member-input.component.css']
})
export class MemberInputComponent implements OnInit {


  memList: Members[] = [];
  nextID: number = 0;
  memName: string = '';
  memRole: string = '';

  constructor(private memService: MemberstorageService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  addNewMember(){
    const newMember: Members = {
      id: this.nextID++,
      name: this.memName,
      role: this.memRole
    };

    this.memService.addNewMember(newMember).subscribe(data => this.fetchData);

    this.memName = "";
    this.memRole = "";
  }

  fetchData(){
    this.memService.getMembers().subscribe(data => this.memList = data);
  }

}
