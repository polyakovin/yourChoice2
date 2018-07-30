import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';

// https://github.com/FortAwesome/angular-fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fal } from '@fortawesome/free-light-svg-icons';
// Merging all icons to one object
let fa = {...fas, ...fab};
for (const icon in fa) {
  fa[icon].prefix = 'fas';
}
library.add(fa);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FontAwesomeModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
