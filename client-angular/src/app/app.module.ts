import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { GetRequestComponent } from './fetch.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeadComponent } from './head/head.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';

@NgModule({
  declarations: [AppComponent, TaskDisplayComponent, GetRequestComponent,
  HeadComponent, LeftPanelComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSidenavModule,
    AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
