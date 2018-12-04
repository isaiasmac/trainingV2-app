import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'trainingV2-app';

  handleClick(value: any) {
  	console.log('handleClick...');
  	console.log(value);

  	if (value.checked == true) {
  		console.log('checkeado');
  	}
  	else{
  		console.log('NOT checkeado');
  	}
  }

  selectedTabChange(event) {
  	console.log('sss')
  }
}
