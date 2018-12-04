import { Component, OnInit } from '@angular/core';

import { AssistantService } from '../assistant.service';
import { UserProfileService } from '../user-profile.service';

import { UserService } from '../user.service';
 

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})


export class AssistantComponent implements OnInit {

	user_profiles: Object;
  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
  	
  	this.userProfileService.getUserProfiles().subscribe(data => {
      this.user_profiles = data;
      console.log(this.user_profiles)
    });

  }

}
