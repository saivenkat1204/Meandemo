import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
{
  path:'',
  redirectTo:'/events',
  pathMatch:'full'
},
  {
    path:'events',component:EventsComponent
  },
  {
    path:'special-events',component:SpecialEventsComponent,
    canActivate:[authGuard]
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent,
    //canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
