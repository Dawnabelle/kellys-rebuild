import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {HistoryComponent } from './history/history.component';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
