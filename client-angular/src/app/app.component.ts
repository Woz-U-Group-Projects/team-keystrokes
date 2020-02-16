import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
}

// export class AppComponent implements AfterViewInit {

//   subscription: Subscription;

//   authentication: boolean;

//   constructor(private helpers: Helpers) {

//   }

//   ngAfterViewInit() {

//     this.subscription = this.helpers.isAuthenticationChanged().pipe(

//       startWith(this.helpers.isAuthenticated()),

//       delay(0)).subscribe((value) =>

//         this.authentication = value

//       );

//   }

//   title = 'Angular 5 Seed';

//   ngOnDestroy() {

//     this.subscription.unsubscribe();

//   }

// }