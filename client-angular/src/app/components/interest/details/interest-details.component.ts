
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { InterestService } from '../../../services/interest/interest.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-interest-details',
 	templateUrl: './interest-details.component.html',
 	styleUrls: ['./interest-details.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class InterestDetailsComponent implements OnInit {
 	index:any;
 	interestDetail:any;
 	constructor(private router: Router, private route: ActivatedRoute, private interestService:InterestService,private toastr: ToastrService) { 
 		// Get user detail index number sent in params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getInterestDetails(this.index);
 			}
 		});
 	}

 	ngOnInit() {
 	}

 	// Get interest details 
 	getInterestDetails(index:number){
 		let getInterestDetail = this.interestService.getInterestDetails(index);
 		if(getInterestDetail) {
 			this.interestDetail = getInterestDetail.interestData;
 			this.toastr.success(getInterestDetail.message,"Success");
 		}
 	}

 }

