import { Component,OnInit} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './CoustemValidators';
import { AuthService } from '../services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  errorMessage = 'Login failed';
  loginForm !:FormGroup;
  constructor(private auth:AuthService,private router:Router){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]),
      password: new FormControl('',[
        Validators.required,
        CustomValidator.passwordValidator()

      ])
      });
  };

  OnSubmit(){
    // if(this.loginForm.valid){
    //   console.log(this.loginForm.value);
    // }
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;


    this.auth.login(username,password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/homeDashboard']); // Example navigation
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    })
  }


}
