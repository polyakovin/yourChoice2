import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";

const APP_ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

// передаём пути на экспорт
export const routing = RouterModule.forRoot(APP_ROUTES);