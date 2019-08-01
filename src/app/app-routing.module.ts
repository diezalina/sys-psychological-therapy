import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import {AddUserComponent} from './psychologist/users/add-user/add-user.component';

const routes: Routes = [
  {
    path: 'home',
    component: CalendarComponent
  },
  {
    path: 'users/add-user',
    component: AddUserComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
