import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DetailsComponent } from'./details/details.component';
import { TheDarkKnightRisesComponent } from './the-dark-knight-rises/the-dark-knight-rises.component';
import { TheDarkKnightComponent } from './the-dark-knight/the-dark-knight.component';
import { Se7enComponent } from './se7en/se7en.component';
import { SevenYearsInTibetComponent } from './seven-years-in-tibet/seven-years-in-tibet.component';
import { DunkirkComponent } from './dunkirk/dunkirk.component';
import { ThemartianComponent } from './themartian/themartian.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ServiceService } from './service';
import { FacebookModule } from 'ngx-facebook';
import { CartComponent } from './cart/cart.component';


const routes: Routes = 
[  
  { path: 'Home', component: HomeComponent},  
  { path: 'Login', component: LoginComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'Edit Profile', component: EditProfileComponent},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Details', component: DetailsComponent},
  { path: 'TheDarkKnight', component: TheDarkKnightComponent},
  { path: 'TheDarkKnightRises', component: TheDarkKnightRisesComponent},
  { path: 'SevenYearsInTibet', component: SevenYearsInTibetComponent},
  { path: 'Se7en', component: Se7enComponent},
  { path: 'Dunkirk', component: DunkirkComponent},
  {  path: 'Themartian', component:  ThemartianComponent},
  { path: '', component: HomeComponent},  
  { path: '**', component: HomeComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    EditProfileComponent,
    DetailsComponent,
    TheDarkKnightRisesComponent,
    TheDarkKnightComponent,
    Se7enComponent,
    SevenYearsInTibetComponent,
    DunkirkComponent,
    ThemartianComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FacebookModule.forRoot(),
    HttpModule,
    JsonpModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
