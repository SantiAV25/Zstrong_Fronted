import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { LoginService } from '../login.service';
import { CreateUser } from '../model/User';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  providers: [LoginService],
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {

  registerFormGroup: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
  });

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Register form submitted', this.registerFormGroup.value);
    const createUser: CreateUser = this.registerFormGroup.value;
    createUser.roleRequest = {roles: ["USER"]};

    this.loginService.createUser(createUser).subscribe({
      next: (data) => {
        console.log('User created successfully', data);
        this.router.navigate(['/main']);
      },
      error: (error) => {
        console.error('Error occurred: ', error);
      }
    });


    }
    
  
  }



