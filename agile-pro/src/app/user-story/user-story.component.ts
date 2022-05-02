import { Component, OnInit } from '@angular/core';
import { UserStories } from '../userstories';
import { UserstoryService } from '../userstory.service';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.css']
})
export class UserStoryComponent implements OnInit {

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
    this.userService.getStories().subscribe(data => this.userList = data);
  }

  deleteUserStories(){
    this.userService.deleteUserStories().subscribe();
  }

}
