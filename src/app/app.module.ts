import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from "./app.routing";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HeaderComponent } from './main/header/header.component';
import { StructureComponent } from './main/structure/structure.component';
import { AdvantagesProductComponent } from './main/advantages-product/advantages-product.component';
import { AdvantagesCompanyComponent } from './main/advantages-company/advantages-company.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './main/footer/footer.component';

mergeAllIconsToOneObject();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    StructureComponent,
    AdvantagesProductComponent,
    AdvantagesCompanyComponent,
    FeedbackComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    FontAwesomeModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

function mergeAllIconsToOneObject() {
  let fa = {...fas, ...fab};
  for (const icon in fa) {
    fa[icon].prefix = 'fas';
  }
  library.add(fa);
}