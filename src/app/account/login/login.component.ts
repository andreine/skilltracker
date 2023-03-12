import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userLoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService,  private toastr: ToastrService){}


  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin(){
    this.accountService.login(this.userLoginForm.value).subscribe({
      next: () => {
        this.toastr.success("Succesfully logged in", "Success");
      },
      error: (error) => {
        this.toastr.error("An error occured, please try again", "Failed");
        console.log(error);
      }
    })
  }



}
