import { Component, OnInit } from '@angular/core';
import { UserstoryService } from '../userstory.service';
import { UserStories } from '../userstories';
import { throws } from 'assert';

@Component({
  selector: 'app-new-user-story',
  templateUrl: './new-user-story.component.html',
  styleUrls: ['./new-user-story.component.css']
})
export class NewUserStoryComponent implements OnInit {

  userList: UserStories[] = [];
  nextID: number = 0;
  newDescription: string = '';

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

  deleteAllUserStories(){
    this.userService.deleteUserStories().subscribe();
  }

}
