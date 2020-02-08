

import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes ,Router} from '@angular/router';
import { ValidationService } from '../../services/config/config.service';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../services/config/config.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class RegisterComponent implements OnInit {
	private registerForm : FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private userService:UserService,private toastr: ToastrService) { 
    this.registerForm = this.formBuilder.group({
    username: ['',  [Validators.required, ValidationService.userNameValidator]],
    email: ['',  [Validators.required, ValidationService.emailValidator]],
    password: ['', [Validators.required, ValidationService.passwordValidator]]
  });
}

	// Check if user already logged in
	ngOnInit() {
		if(localStorage.getItem('userData')) {
			this.router.navigate(['/register']);
		}
	}

	// Initicate Register
	doRegister(){
		let register = this.userService.doRegister(this.registerForm.value);
		this.success(register);
	}

	// Register success function
	success(data){
		if (data.code == 200) {
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.router.navigate(['/']);
			this.toastr.success('Success', "Registered Successfully");
		}else{
			this.toastr.error('Failed', "Invalid Username or Password");
		}
	}

}
