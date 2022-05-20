import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './adminportal/adminportal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurd } from './services/auth.gaurd';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
// import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserAuthGaurd } from './services/userauth.guard';
import { UserPortalComponent } from './userportal/userportal.component';
import { UserPortalService } from './services/userportal.service';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { airlineresgiterComponent } from './airlineregister/airlineregister.component';
import { GridUtiliyModule } from './utility/utility.module';


@NgModule({
  declarations: [
    AppComponent,   
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserPortalComponent,
    MyBookingsComponent,BookFlightsComponent,
    airlineresgiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [AdminService,AuthService,AuthGaurd,UserAuthGaurd,UserPortalService
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptorService,
  //   multi:true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
