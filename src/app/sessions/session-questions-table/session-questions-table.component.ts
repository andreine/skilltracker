import { Component, Input } from '@angular/core';
import { SessionQuestionModel } from 'src/app/shared/models/SessionQuestionModel';

@Component({
  selector: 'app-session-questions-table',
  templateUrl: './session-questions-table.component.html',
  styleUrls: ['./session-questions-table.component.css']
})
export class SessionQuestionsTableComponent {
  @Input() allQuestions: Array<SessionQuestionModel> = [];
  
  clonedProducts: any = {};
  globalEdit = false;
   

  onRowEditInit(product: any): void {
    this.clonedProducts[product.id] = {...product};
    this.globalEdit = true;
  }

  onRowEditSave(product: any): void {
    delete this.clonedProducts[product.id];
    this.globalEdit = false;
  }

  onRowEditCancel(product: any, index: number): void {
    this.allQuestions[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
    this.globalEdit = false;
  }

  onRowDelete(question: any): void {
  }


}
