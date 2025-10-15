import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hidePwdContent: boolean = true;
  hideRPwdContent: boolean = true;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.registerForm = this.fb.group({
      firstName:fb.control('', [Validators.required]),
      lastName:fb.control('', [Validators.required]),
      email:fb.control('', [Validators.required]),
      mobileNumber:fb.control('', [Validators.required]),
      password:fb.control('', [Validators.required]),
      rPassword:fb.control('', [Validators.required]),
    });
  }

  register() {
    let user ={
      firstName: this.registerForm.value.get("firstName")?.value,
      lastName: this.registerForm.value.get("lastName")?.value,
      email: this.registerForm.value.get("email")?.value,
      mobileNumber: this.registerForm.value.get("mobileNumber")?.value,
      password: this.registerForm.value.get("password")?.value,
      rPassword: this.registerForm.value.get("rPassword")?.value
    }

  }

}
