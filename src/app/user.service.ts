import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

	users: User[];

  constructor(private http: HttpClient) {
  	this.users = [];
  }

  getUsers() {
  	return this.http.get('http://127.0.0.1:3000/users')
  }

}
