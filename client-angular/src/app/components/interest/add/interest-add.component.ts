
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';

 // Services
 import { ValidationService } from '../../../services/config/config.service';
 import { InterestService } from '../../../services/interest/interest.service';
 import { routerTransition } from '../../../services/config/config.service';
 
 import { ToastrService } from 'ngx-toastr';

 @Component({
 	selector: 'app-interest-add',
 	templateUrl: './interest-add.component.html',
 	styleUrls: ['./interest-add.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class InterestAddComponent implements OnInit {
 	// create interestAddForm of type FormGroup 
 	private interestAddForm : FormGroup;
 	index:any;

 	constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private interestService:InterestService,private toastr: ToastrService) { 

 		// Check for route params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			// check if ID exists in route & call update or add methods accordingly
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getInterestDetails(this.index);
 			}else{
 				this.createForm(null);
 			}
 		});
 	}

 	ngOnInit() {
 	}

 	// Submit interest details form
 	doRegister(){
 		if (this.index && this.index != null && this.index != undefined) {
 			this.interestAddForm.value.id = this.index
 		}else{
 			this.index = null;
 		}
 		let interestRegister = this.interestService.doRegisterInterest(this.interestAddForm.value, this.index);
 		if(interestRegister) {
 			if (interestRegister.code == 200) {
 				this.toastr.success(interestRegister.message,"Success");
 				this.router.navigate(['/']);
 			}else{
 				this.toastr.error(interestRegister.message,"Failed");
 			}
 		}
 	}

 	// If this is update form, get user details and update form
 	getInterestDetails(index:number){
 		let interestDetail = this.interestService.getInterestDetails(index);
 		this.createForm(interestDetail);
 	}

 	// If this is update request then auto fill form
 	createForm(data){
 		if (data == null) {
 			this.interestAddForm = this.formBuilder.group({
 				producer_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				googlemaps_api: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: ['',  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: ['',  [Validators.required, ValidationService.emailValidator]]
 			});			
 		}else{
 			this.interestAddForm = this.formBuilder.group({
 				producer_name: [data.interestData.producer_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				googlemaps_api: [data.interestData.googlemaps_api,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: [data.interestData.phone,  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: [data.interestData.email,  [Validators.required, ValidationService.emailValidator]]
 			});
 		}
 	}

 }

