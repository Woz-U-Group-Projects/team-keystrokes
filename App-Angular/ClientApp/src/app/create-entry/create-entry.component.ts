import { Component, OnInit } from '@angular/core';
import { Entry } from '../../app/entry';


@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  today: number = Date.now();

  wordCount = 0;

  constructor() { }

  ngOnInit() {

  }

  wordCounter(words) {
    this.wordCount = words.split(/\s+/).length;
  }

  // onSubmit() {
  //   // EVENT EMITTER

  //   console.warn(this.diaryEntry.value)
  // }
}
