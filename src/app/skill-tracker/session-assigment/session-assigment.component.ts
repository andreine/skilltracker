import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillTrackerService } from '../skill-tracker.service';

@Component({
  selector: 'app-session-assigment',
  templateUrl: './session-assigment.component.html',
  styleUrls: ['./session-assigment.component.css']
})
export class SessionAssigmentComponent implements OnInit {

  questions!: any;
  answers: any = [];
  sessionId!: number;

  constructor(private fb: FormBuilder, 
    private trackerService: SkillTrackerService, 
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.sessionId = Number.parseInt(x.get('id')!);
      this.getActiveSessionQuestions(this.sessionId);
    })
  }

  getActiveSessionQuestions(sessionId: number){
    this.trackerService.getEmployeeSessionQuestions(sessionId).subscribe(x => {
      console.log(x)
      this.questions = x;
    })
  }


  selectedQuestion(event: any, question: any){
    let selected = event.target.innerHTML
    for(let [key, value] of Object.entries(question)){
      if(value === selected && event.target.classList.contains("answer")){
        this.tryAddAnswer(question.id, key, event)
      }
    }
  }


  submitSessionQuestions(){
    const dataToSubmit = {
      sessionId: this.sessionId,
      answers: this.answers
    }
    console.log(this.answers)
    this.trackerService.submitSessionQuestions(dataToSubmit).subscribe(
      {
        next: (x) => {
          console.log(x)
          this.router.navigate([`sessionReport`, x.userSessionId])
          this.toastr.success("Submitted succesfully", "Succes");
        },
        error: (error) => {
          this.toastr.error("Could not create session", "Failed");
        }
      }
      );



  }


  tryAddAnswer(id: any, answer: any, event:any){
    let answered = null;
    if(answer === "firstAnswer"){
      answered = "A";
    }else if(answer === "secondAnswer"){
      answered = "B";
    }else if(answer === "thirdAnswer"){
      answered = "C";
    }else if(answer === "fourthAnswer"){
      answered = "D";
    }

    let replace = false;
    let spaceToReplace = null;
    if(this.answers.length > 0){
      for(let i = 0; i< this.answers.length; i++){
        if(this.answers[i].questionId === id){
          spaceToReplace= i;
          replace = true;
          break;
        }else{
        }
      }
    }

    if(replace){
      this.answers.splice(spaceToReplace, 1);
      this.answers.push({questionId: id, answered: answered})
      let selected = event.target.parentElement.querySelector(".selected");
      selected.classList.remove("selected");
      event.target.classList.add("selected");
    }else{
      this.answers.push({questionId: id, answered: answered})
      event?.target.classList.add("selected");
    }



    console.log(this.answers)
  }

}
