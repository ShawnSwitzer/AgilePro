import { Component, OnInit } from '@angular/core';
import { UserStories } from '../userstories';
import { UserstoryService } from '../userstory.service';


@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.css']
})
export class UserStoryComponent implements OnInit {

  public storiesL: UserStories[] = [];

  constructor(private userstoryService: UserstoryService) { }

  ngOnInit(): void {
    this.getAllStories();
  }

  public getAllStories(){
    this.userstoryService.getAllStories()
    .subscribe({next:(data:UserStories[]) =>{
      this.storiesL = data;
    }
    })
  }
  public clickDeleteUserStory(storyId:number){
    if(storyId){
      this.userstoryService.deleteUStory(storyId)
      .subscribe({next:(data:{})=>{
        this.getAllStories();
      }
      })
    }
  }

}
