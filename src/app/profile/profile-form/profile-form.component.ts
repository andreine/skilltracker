import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {

  profileForm: any;

  constructor(private profileService: ProfileService, private toastr: ToastrService){}
  
  ngOnInit(): void {
    this.getUserProfile();

    this.profileForm = new FormGroup({
      email: new FormControl(""),
      firstName: new FormControl(""),
      lastName: new FormControl(""),
    })
  }

  getUserProfile(){
    this.profileService.getUserProfile().subscribe(
      {
        next: (x) => {
          console.log(x)
          this.profileForm.get('email')?.setValue(x.email) 
          this.profileForm.get('firstName')?.setValue(x.firstName) 
          this.profileForm.get('lastName')?.setValue(x.lastName) 
        },
        error: (error) => {
          this.toastr.error("Could not load sessions", "Failed");
        }
      }
    );
  }

  
}
