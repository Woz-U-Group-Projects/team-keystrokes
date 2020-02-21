import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { ReadEntryComponent } from './read-entry/read-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    // CounterComponent,
    // FetchDataComponent,
    CreateEntryComponent,
    EditEntryComponent,
    ReadEntryComponent,
    DeleteEntryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // < Template Component Routes >

      // { path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent },

      // < / Template Component Routes >

      // < DearDiary Component Routes >

      { path: 'create', component: CreateEntryComponent },
      { path: 'edit', component: EditEntryComponent },
      { path: 'read', component: ReadEntryComponent },
      { path: 'delete', component: DeleteEntryComponent }


      // < / DearDiary Component Routes >

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
