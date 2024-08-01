import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser, LoginResponse, LoginUser} from './model/User';
import { catchError, Observable, throwError, lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ZstrongApiUrl = "http://localhost:8081/auth";
  isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }
  
  createUser(user: CreateUser):Observable<CreateUser>{
    return this.http.post<CreateUser>(this.ZstrongApiUrl + "/sign-up", user).pipe( 
      catchError((error) => {
      console.error('Error occurred: ', error); // Log the error to the console
      return throwError(() => new Error('Error occurred while register User')); // Rethrow the error as a new Observable error
    })
  );
  }

  async userLogin(request: LoginUser): Promise<void> {
    try {
      const response = await lastValueFrom(
        this.http.post<LoginResponse>(this.ZstrongApiUrl + "/login", request).pipe(
          catchError((error) => {
            console.error('Error occurred: ', error); // Log the error to the console
            return throwError(() => new Error('Error occurred during authentication')); // Rethrow the error as a new Observable error
          })
        )
      );

      if (response.status && response.jwt) {
        localStorage.setItem("jwt", response.jwt);
        localStorage.setItem("username", response.username);
      }}catch (error) {
        console.error('Error occurred: ', error); // Log the error to the console// Rethrow the error as a new Observable error
      }}

      get  token(){
        return localStorage.getItem("jwt");
      }

      get username(){
        return localStorage.getItem("username");
      }

      logout(){
        localStorage.removeItem("jwt");
        localStorage.removeItem("username");
      }
}
