import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { InterestService } from './services/interest/interest.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { InterestListComponent } from './components/interest/list/interest-list.component';
import { InterestDetailsComponent } from './components/interest/details/interest-details.component';
import { InterestAddComponent } from './components/interest/add/interest-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightInterestDirective } from './directives/highlight-interest.directive';
import { RegisterComponent } from './components/register/register.component';



// Parent Routes
const routes : Routes = [
{
	path: '', // Default Route
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
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
	path: '**', // If Route is anything but a defined route, route to Default
	redirectTo: ''
}
];

@NgModule({
	declarations: [
	AppComponent,
	InterestListComponent,
	InterestDetailsComponent,
	InterestAddComponent,
	LoginComponent,
	HomeComponent,
	FilterPipe,
	PhonePipe,
	HighlightInterestDirective,
	RegisterComponent,
	],
	imports: [
	BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
	],
	providers: [AuthService,UserService,InterestService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
