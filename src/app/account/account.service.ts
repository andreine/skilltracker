import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }


  login(values: any){
    return this.http.post<any>(this.baseUrl + 'account/login', values).pipe(
      map((user: any) => {
        if(user) {
          this.auth.loadUserData(user.token);
          this.router.navigateByUrl("/home");
        }
      })
    )
  }
}
