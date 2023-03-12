import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionQuestionModel } from 'src/app/shared/models/SessionQuestionModel';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit{
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput!: ElementRef;
  fileUploadForm!: FormGroup;
  fileInputLabel!: string | undefined;
  public allQuestions: Array<SessionQuestionModel> = [];
  sessionId!: string;
  canPressUpload = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private skillManagerService: SessionsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });

    this.route.paramMap.subscribe(x => {
      this.sessionId = x.get('id')!;
      this.getAllSessionQuestions();
    })
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
        this.fileInputLabel = file.name;
        this?.fileUploadForm?.get('myfile')?.setValue(file);
        this.canPressUpload = true;
    }
  }

  getAllSessionQuestions(): void{
    this.skillManagerService.getSessionQuestions(this.sessionId).subscribe(
      {
        next: (x: Array<SessionQuestionModel>) => {
          this.allQuestions = x;
        },
        error: (error) => {
          this.toastr.error("Could not upload questions", "Failed");
        }
      }
    );
  }


  onFormSubmit(): boolean {
    if (!this.fileUploadForm.get('myfile')?.value) {
      alert('Please fill valid details!');
      return false;
    }
    const formData = new FormData();
    formData.append('file', this.fileUploadForm.get('myfile')?.value);
    formData.append('sessionId', this.sessionId.toString());


    this.skillManagerService.uploadExcelData(formData).subscribe(
        {
          next: (x) => {
            this.toastr.success("Questions uploaded succesfully", "Success");
            this.uploadFileInput.nativeElement.value = "";
            this.fileInputLabel = undefined;
            this?.fileUploadForm.reset('myfile');
            this.canPressUpload = false;
            this.getAllSessionQuestions()
          },
          error: (error) => {
            this.toastr.error("Could not upload questions", "Failed");
          }
        }
      );
    return true
  }


}
