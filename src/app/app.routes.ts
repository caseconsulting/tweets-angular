import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { AppComponent } from './app.component';

//routing
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'help', component: HelpComponent },
  //{ path: '**', component: AppComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
