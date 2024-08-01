import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../login.service';
import { LoginUser } from '../model/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  providers: [LoginService],
  imports: [IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink,HttpClientModule,ReactiveFormsModule]
})
export class MainPage implements OnInit {

  loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Login form submitted', this.loginFormGroup.value);
    const loginuser: LoginUser = this.loginFormGroup.value;
    this.loginService.userLogin(loginuser).then(() => {
      console.log('User logged in successfully');
      this.router.navigate(['/create-mesociclo']);
    }).catch((error) => {
      console.error('Error occurred: ', error);
    });
  }

}
