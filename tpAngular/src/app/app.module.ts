import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { ChatService } from './chat/services/chat.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
	AppComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ChatModule,
	FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
