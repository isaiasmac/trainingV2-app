import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-assistant-inscription',
  templateUrl: './assistant-inscription.component.html',
  styleUrls: ['./assistant-inscription.component.css']
})
export class AssistantInscriptionComponent implements OnInit {

	users : User[];

  constructor(private userService: UserService) { 
  	this.users = []
  }

  ngOnInit() {
  	this.fetchUsers();
  }

  private fetchUsers() {
  	this.userService.getUsers().subscribe((res : User[])=>{
      this.users = res;
      console.log(this.users);
    });
  }

}
