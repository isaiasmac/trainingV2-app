import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, 
         MatDatepickerModule, MatNativeDateModule, MatFormFieldModule,
         MatCardModule, MatTabsModule, 
         MatGridListModule,
         MatInputModule, MatSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssistantComponent } from './assistant/assistant.component';
import { AssistantInscriptionComponent } from './assistant-inscription/assistant-inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    AssistantComponent,
    AssistantInscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,
    MatFormFieldModule, MatCardModule,
    MatTabsModule, MatGridListModule, 
    MatInputModule, MatSelectModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
