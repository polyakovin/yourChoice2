import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";

const APP_ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

// передаём пути на экспорт
export const routing = RouterModule.forRoot(APP_ROUTES);