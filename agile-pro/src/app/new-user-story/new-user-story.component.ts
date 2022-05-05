import { Component, OnInit } from '@angular/core';
import { UserstoryService } from '../userstory.service';
import { UserStories } from '../userstories';
import { Router } from '@angular/router';
import { throws } from 'assert';

@Component({
  selector: 'app-new-user-story',
  templateUrl: './new-user-story.component.html',
  styleUrls: ['./new-user-story.component.css']
})
export class NewUserStoryComponent implements OnInit {

  userStory: UserStories = {} as UserStories;
  public stories: UserStories[] = [];
  public sDesc: string = "";

  constructor(private userstoryService: UserstoryService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  public addStory() {
    this.userstoryService.addNewStory(this.userStory).subscribe({
      next: (data: {}) => {
        this.router.navigate(['/']).then();

       // this.router.navigate(['/']).then();
      }
    });
  }

}
