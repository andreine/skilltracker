import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'skilltracker';

  constructor(private auth: AuthService, private router: Router){}


  ngOnInit(): void {
    this.auth.loadUserData(null);
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }


}
