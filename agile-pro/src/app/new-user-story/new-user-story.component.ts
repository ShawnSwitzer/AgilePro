import { Component, OnInit } from '@angular/core';
import { UserstoryService } from '../userstory.service';
import { UserStories } from '../userstories';

@Component({
  selector: 'app-new-user-story',
  templateUrl: './new-user-story.component.html',
  styleUrls: ['./new-user-story.component.css']
})
export class NewUserStoryComponent implements OnInit {

  userList: UserStories[] = [];
  nextID: number = 0;

  constructor(private userService: UserstoryService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  addNewStory(){
    const newStory: UserStories = {
      id: this.nextID++,
      description: this.newDescription

    };
  }

  fetchData(){
    this.userService.getTasks().subscribe(data => this.userList = data);
  }

}
