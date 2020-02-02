

 import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { InterestService } from '../../../services/interest/interest.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-interest-list',
 	templateUrl: './interest-list.component.html',
 	styleUrls: ['./interest-list.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class InterestListComponent implements OnInit {
 	interestList:any;
 	interestListData:any;
 	constructor(private interestService:InterestService,private toastr: ToastrService) { }
 	// Call interest list function on page load 
 	ngOnInit() {
 		this.getInterestList();
 	}

 	// Get interest list from services
 	getInterestList(){
 		let interestList = this.interestService.getAllInterests();
 		this.success(interestList)
 	}

 	// Get interest list success
 	success(data){
 		this.interestListData = data.data;
 		for (var i = 0; i < this.interestListData.length; i++) {
 			this.interestListData[i].name = this.interestListData[i].producer_name +' '+ this.interestListData[i].googlemaps_api;
 		}
 	}

 	// Delete a interest with its index
 	deleteInterest(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure?");
 		if (r == true) {
 			let interestDelete = this.interestService.deleteInterest(index);
 			if(interestDelete) {
 				this.toastr.success("Success", "Interest Deleted");
 			} 
 			this.getInterestList();
 		}
 	}
 }

