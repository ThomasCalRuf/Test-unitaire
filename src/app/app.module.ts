import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './User/User.component';
import { HippopotamusComponent } from './Hippopotamus/Hippopotamus.component';

@NgModule({
  declarations: [		
    AppComponent,
      UserComponent,
      HippopotamusComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
