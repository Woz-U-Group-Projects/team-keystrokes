import { Component, OnInit } from '@angular/core';
import { Entry } from '../../app/entry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Diary } from '../diary';


@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  today: number = Date.now();

  wordCount = 0;

  CreateEntryForm = new FormGroup({
    chapter: new FormControl(''),
    dateTime: new FormControl(''),
    entryBody: new FormControl(''),
    wordCount: new FormControl(''),
  });
  private databaseRoute = 'http://localhost:5000';
  public diaries: Diary[];
  public entries: Entry[];

  constructor(private http: HttpClient) {

   }

  ngOnInit() {

  }

  wordCounter(words) {
    this.wordCount = words.split(/\s+/).length;
  }

  onSubmit() {

  // this.http.post<Diary>(this.databaseRoute, this.CreateEntryForm);

    console.warn(this.CreateEntryForm.value);
  }
}
