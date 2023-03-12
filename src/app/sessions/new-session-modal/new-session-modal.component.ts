import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-new-session-modal',
  templateUrl: './new-session-modal.component.html',
  styleUrls: ['./new-session-modal.component.css']
})
export class NewSessionModalComponent {
  @Input() showModal! : boolean;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  addNewSessionForm !: FormGroup;
  constructor(private sessionsService: SessionsService,  private toastr: ToastrService){}

  ngOnInit(): void {
    this.addNewSessionForm = new FormGroup({
      name: new FormControl(""),
    })
  }

  addNewSession(){
    let sessionForm = {
      name: this.addNewSessionForm.get("name")?.value,
    }
    this.showModal = false;
    this.closeModalEvent.emit(this.showModal);
    this.sessionsService.addNewSession(sessionForm).subscribe(
      {
        next: () => {
          this.toastr.success("Session added", "Succes");
          this.addNewSessionForm.reset();
        },
        error: (error) => {
          this.toastr.error("Could not create session", "Failed");
          console.log(error);
          this.addNewSessionForm.reset();
        }
      }
    )
  }

  closeModal(){
    this.showModal = false;
    this.closeModalEvent.emit(this.showModal);
  }

}
