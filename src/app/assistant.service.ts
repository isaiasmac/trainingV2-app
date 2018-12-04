import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AssistantService {

  constructor(private http: HttpClient) { }

  getAssistants() {
  	return this.http.get('https://reqres.in/api/users')
  }

}
