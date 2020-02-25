import { Component, OnInit } from '@angular/core';
import { Entry } from '../../app/entry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Diary } from '../diary';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  today: string = Date().toString();

  wordCount = 0;

  CreateEntryForm = new FormGroup({
    chapter: new FormControl(''),
    dateCreated: new FormControl(this.today),
    body: new FormControl(''),
    wordCount: new FormControl(this.wordCount)
  });
  private databaseRoute = '/Home/CreateDiary';
  public diaries: Diary[];
  public entries: Entry[];

  constructor(private http: HttpClient) {

   }

  ngOnInit() {

  }

  wordCounter(words) {
    this.wordCount = words.split(/\s+/).length;
    this.CreateEntryForm.controls.wordCount.setValue(this.wordCount);
  }

  onSubmit() {
    const entry: Entry = this.CreateEntryForm.value;
    entry.id = 0;
    entry.wordCount = entry.wordCount;

    console.log(entry);
    this.http.post<Entry>(this.databaseRoute, entry).subscribe(response => {
      console.log(response);
    });

    // console.warn(this.CreateEntryForm.value);
  }
}
