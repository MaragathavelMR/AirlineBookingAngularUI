import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminportal/adminportal.component';
import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurd } from './services/auth.gaurd';
import { UserAuthGaurd } from './services/userauth.guard';
import { UserPortalComponent } from './userportal/userportal.component';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { airlineresgiterComponent } from './airlineregister/airlineregister.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component:AdminComponent
  },
  {
    path: 'airline',
    component:airlineresgiterComponent
  },
  {
    path: 'user',
    canActivate:[UserAuthGaurd],
    component: UserPortalComponent
  },
  {
    path: 'bookingDetails',
    canActivate:[UserAuthGaurd],
    component: MyBookingsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'bookflight',
    canActivate:[AuthGaurd],
    component: BookFlightsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
