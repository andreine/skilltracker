"use strict";(self.webpackChunkskilltracker=self.webpackChunkskilltracker||[]).push([[995],{9995:(pe,S,p)=>{p.r(S),p.d(S,{SessionsModule:()=>d});var w=p(6895),_=p(6773),e=p(8256),a=p(433),M=p(2340),A=p(529);class c{constructor(t){this.http=t,this.baseUrl=M.N.apiUrl}addNewSession(t){return this.http.post(this.baseUrl+"skillstracker/addNewSession",t)}getAllSessions(){return this.http.get(this.baseUrl+"skillstracker/getAllSessions")}getSessionQuestions(t){return this.http.get(this.baseUrl+`skillstracker/getsessionquestions/${t}`)}uploadExcelData(t){return this.http.post(this.baseUrl+"skillstracker/uploadSkills",t)}}c.\u0275fac=function(t){return new(t||c)(e.LFG(A.eN))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var C=p(7185),m=p(5593),r=p(47),x=p(805),Z=p(1740);function Q(o,t){1&o&&(e.TgZ(0,"tr")(1,"th",4),e._uU(2,"Categorie "),e._UZ(3,"p-sortIcon",5),e.qZA(),e.TgZ(4,"th",6),e._uU(5,"Intrebare "),e._UZ(6,"p-sortIcon",7),e.qZA(),e.TgZ(7,"th",8),e._uU(8,"A "),e._UZ(9,"p-sortIcon",9),e.qZA(),e.TgZ(10,"th",10),e._uU(11,"B "),e._UZ(12,"p-sortIcon",11),e.qZA(),e.TgZ(13,"th",12),e._uU(14,"C "),e._UZ(15,"p-sortIcon",13),e.qZA(),e.TgZ(16,"th",14),e._uU(17,"D "),e._UZ(18,"p-sortIcon",15),e.qZA(),e.TgZ(19,"th",16),e._uU(20,"Raspuns "),e._UZ(21,"p-sortIcon",17),e.qZA(),e._UZ(22,"th"),e.qZA())}function q(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"input",26),e.NdJ("ngModelChange",function(s){e.CHM(n);const l=e.oxw().$implicit;return e.KtG(l.questionCategory=s)}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("ngModel",n.questionCategory)}}function y(o,t){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.questionCategory," ")}}function v(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"input",26),e.NdJ("ngModelChange",function(s){e.CHM(n);const l=e.oxw().$implicit;return e.KtG(l.name=s)}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("ngModel",n.name)}}function N(o,t){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.name," ")}}function U(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"input",26),e.NdJ("ngModelChange",function(s){e.CHM(n);const l=e.oxw().$implicit;return e.KtG(l.firstAnswer=s)}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("ngModel",n.firstAnswer)}}function E(o,t){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.firstAnswer," ")}}function J(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"input",27),e.NdJ("ngModelChange",function(s){e.CHM(n);const l=e.oxw().$implicit;return e.KtG(l.secondAnswer=s)}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("ngModel",n.secondAnswer)}}function F(o,t){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.secondAnswer," ")}}function I(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"input",27),e.NdJ("ngModelChange",function(s){e.CHM(n);const l=e.oxw().$implicit;return e.KtG(l.thirdAnswer=s)}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("ngModel",n.thirdAnswer)}}function k(o,t){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.thirdAnswer," ")}}function Y(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"input",27),e.NdJ("ngModelChange",function(s){e.CHM(n);const l=e.oxw().$implicit;return e.KtG(l.fourthAnswer=s)}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("ngModel",n.fourthAnswer)}}function R(o,t){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.fourthAnswer," ")}}function $(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"input",27),e.NdJ("ngModelChange",function(s){e.CHM(n);const l=e.oxw().$implicit;return e.KtG(l.correctAnswer=s)}),e.qZA()}if(2&o){const n=e.oxw().$implicit;e.Q6J("ngModel",n.correctAnswer)}}function H(o,t){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.correctAnswer," ")}}function B(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(n);const s=e.oxw().$implicit,l=e.oxw();return e.KtG(l.onRowEditInit(s))}),e.qZA()}}function D(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(n);const s=e.oxw().$implicit,l=e.oxw();return e.KtG(l.onRowEditInit(s))}),e.qZA()}}function P(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(n);const s=e.oxw().$implicit,l=e.oxw();return e.KtG(l.onRowEditSave(s))}),e.qZA()}}function j(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(n);const s=e.oxw(),l=s.$implicit,le=s.rowIndex,ae=e.oxw();return e.KtG(ae.onRowEditCancel(l,le))}),e.qZA()}}function G(o,t){if(1&o&&(e.TgZ(0,"tr",18)(1,"td")(2,"p-cellEditor"),e.YNc(3,q,1,1,"ng-template",19),e.YNc(4,y,1,1,"ng-template",20),e.qZA()(),e.TgZ(5,"td")(6,"p-cellEditor"),e.YNc(7,v,1,1,"ng-template",19),e.YNc(8,N,1,1,"ng-template",20),e.qZA()(),e.TgZ(9,"td")(10,"p-cellEditor"),e.YNc(11,U,1,1,"ng-template",19),e.YNc(12,E,1,1,"ng-template",20),e.qZA()(),e.TgZ(13,"td")(14,"p-cellEditor"),e.YNc(15,J,1,1,"ng-template",19),e.YNc(16,F,1,1,"ng-template",20),e.qZA()(),e.TgZ(17,"td")(18,"p-cellEditor"),e.YNc(19,I,1,1,"ng-template",19),e.YNc(20,k,1,1,"ng-template",20),e.qZA()(),e.TgZ(21,"td")(22,"p-cellEditor"),e.YNc(23,Y,1,1,"ng-template",19),e.YNc(24,R,1,1,"ng-template",20),e.qZA()(),e.TgZ(25,"td")(26,"p-cellEditor"),e.YNc(27,$,1,1,"ng-template",19),e.YNc(28,H,1,1,"ng-template",20),e.qZA()(),e.TgZ(29,"td")(30,"div",21),e.YNc(31,B,1,0,"button",22),e.YNc(32,D,1,0,"button",23),e.YNc(33,P,1,0,"button",24),e.YNc(34,j,1,0,"button",25),e.qZA()()()),2&o){const n=t.$implicit,i=t.editing,s=e.oxw();e.Q6J("pEditableRow",n),e.xp6(31),e.Q6J("ngIf",!i&&!s.globalEdit),e.xp6(1),e.Q6J("ngIf",!i&&!s.globalEdit),e.xp6(1),e.Q6J("ngIf",i&&s.globalEdit),e.xp6(1),e.Q6J("ngIf",i&&s.globalEdit)}}const O=function(){return{"min-width":"50rem"}};class g{constructor(){this.allQuestions=[],this.clonedProducts={},this.globalEdit=!1}onRowEditInit(t){this.clonedProducts[t.id]={...t},this.globalEdit=!0}onRowEditSave(t){delete this.clonedProducts[t.id],this.globalEdit=!1}onRowEditCancel(t,n){this.allQuestions[n]=this.clonedProducts[t.id],delete this.clonedProducts[t.id],this.globalEdit=!1}onRowDelete(t){}}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-session-questions-table"]],inputs:{allQuestions:"allQuestions"},decls:6,vars:5,consts:[[1,"card","container","mt-5"],["dataKey","id","editMode","row",3,"value","tableStyle","paginator","rows"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","questionCategory",2,"width","10%"],["field","questionCategory"],["pSortableColumn","name",2,"width","20%"],["field","name"],["pSortableColumn","firstAnswer",2,"width","20%"],["field","firstAnswer"],["pSortableColumn","secondAnswer",2,"width","20%"],["field","secondAnswer"],["pSortableColumn","thirdAnswer",2,"width","20%"],["field","thirdAnswer"],["pSortableColumn","fourthAnswer",2,"width","20%"],["field","fourthAnswer"],["pSortableColumn","correctAnswer",2,"width","10%"],["field","correctAnswer"],[3,"pEditableRow"],["pTemplate","input"],["pTemplate","output"],[1,"flex","align-items-center","justify-content-center","gap-2"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","class","p-button-rounded p-button-text",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-trash","class","p-button-rounded p-button-text p-button-danger",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","class","p-button-rounded p-button-text p-button-success mr-2",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","class","p-button-rounded p-button-text p-button-danger",3,"click",4,"ngIf"],["pInputText","","type","text","required","",3,"ngModel","ngModelChange"],["pInputText","","type","text",3,"ngModel","ngModelChange"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-trash",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check",1,"p-button-rounded","p-button-text","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h5"),e._uU(2,"Toate intrebarile"),e.qZA(),e.TgZ(3,"p-table",1),e.YNc(4,Q,23,0,"ng-template",2),e.YNc(5,G,35,5,"ng-template",3),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("value",n.allQuestions)("tableStyle",e.DdM(4,O))("paginator",!0)("rows",10))},dependencies:[w.O5,a.Fj,a.JJ,a.Q7,m.Hq,a.On,r.iA,x.jx,r.lQ,r.YL,r.fz,r.D$,r.Pv,r.U1,r.wT,Z.o]});const K=["UploadFileInput"];function L(o,t){if(1&o&&e._UZ(0,"app-session-questions-table",12),2&o){const n=e.oxw();e.Q6J("allQuestions",n.allQuestions)}}function z(o,t){1&o&&(e.TgZ(0,"div",13)(1,"p",14),e._uU(2,"There are no questions for this session"),e.qZA()())}const X=function(){return["../../"]};class f{constructor(t,n,i,s){this.formBuilder=t,this.route=n,this.skillManagerService=i,this.toastr=s,this.allQuestions=[],this.canPressUpload=!1}ngOnInit(){this.fileUploadForm=this.formBuilder.group({myfile:[""]}),this.route.paramMap.subscribe(t=>{this.sessionId=t.get("id"),this.getAllSessionQuestions()})}onFileSelect(t){if(t.target.files.length>0){const n=t.target.files[0];this.fileInputLabel=n.name,this?.fileUploadForm?.get("myfile")?.setValue(n),this.canPressUpload=!0}}getAllSessionQuestions(){this.skillManagerService.getSessionQuestions(this.sessionId).subscribe({next:t=>{this.allQuestions=t},error:t=>{this.toastr.error("Could not upload questions","Failed")}})}onFormSubmit(){if(!this.fileUploadForm.get("myfile")?.value)return alert("Please fill valid details!"),!1;const t=new FormData;return t.append("file",this.fileUploadForm.get("myfile")?.value),t.append("sessionId",this.sessionId.toString()),this.skillManagerService.uploadExcelData(t).subscribe({next:n=>{this.toastr.success("Questions uploaded succesfully","Success"),this.uploadFileInput.nativeElement.value="",this.fileInputLabel=void 0,this?.fileUploadForm.reset("myfile"),this.canPressUpload=!1,this.getAllSessionQuestions()},error:n=>{this.toastr.error("Could not upload questions","Failed")}}),!0}}function V(o,t){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Name"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Created"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Edit session"),e.qZA()())}f.\u0275fac=function(t){return new(t||f)(e.Y36(a.qu),e.Y36(_.gz),e.Y36(c),e.Y36(C._W))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-session-details"]],viewQuery:function(t,n){if(1&t&&e.Gf(K,5),2&t){let i;e.iGM(i=e.CRH())&&(n.uploadFileInput=i.first)}},decls:13,vars:6,consts:[[1,"container","d-flex","justify-content-between","mt-3"],["pButton","","type","button","label","Back",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"d-flex","align-items-center"],["type","file","id","customFile","name","myfile",1,"custom-file-input",3,"change"],["UploadFileInput",""],["for","customFile"],[1,"pi","pi-file-excel",2,"font-size","30px","color","green","margin-right","10px","cursor","pointer"],["pButton","","type","submit",1,"btn","btn-success",3,"disabled"],[3,"allQuestions",4,"ngIf"],[1,"d-flex","justify-content-center","no-employee-sessions-outer"],["class","no-employee-sessions",4,"ngIf"],[3,"allQuestions"],[1,"no-employee-sessions"],[1,"par-no-sessions-emp"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"button",1),e.TgZ(2,"form",2),e.NdJ("ngSubmit",function(){return n.onFormSubmit()}),e.TgZ(3,"div",3)(4,"input",4,5),e.NdJ("change",function(s){return n.onFileSelect(s)}),e.qZA(),e.TgZ(6,"label",6),e._UZ(7,"i",7),e.qZA(),e.TgZ(8,"button",8),e._uU(9,"Upload"),e.qZA()()()(),e.YNc(10,L,1,1,"app-session-questions-table",9),e.TgZ(11,"div",10),e.YNc(12,z,3,0,"div",11),e.qZA()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(5,X)),e.xp6(1),e.Q6J("formGroup",n.fileUploadForm),e.xp6(6),e.Q6J("disabled",!n.canPressUpload),e.xp6(2),e.Q6J("ngIf",n.allQuestions.length>0),e.xp6(2),e.Q6J("ngIf",0===(null==n.allQuestions?null:n.allQuestions.length)))},dependencies:[w.O5,_.rH,a._Y,a.JL,a.sg,m.Hq,g],styles:[".custom-file-input[_ngcontent-%COMP%]{display:none}.excel-upload-button[_ngcontent-%COMP%]{padding:100px}.no-employee-sessions[_ngcontent-%COMP%]{width:350px;height:100px;border:1px solid grey;box-shadow:5px 2px 5px 5px gray;display:flex;align-items:center;justify-content:center}.no-employee-sessions-outer[_ngcontent-%COMP%]{margin-top:200px}.employee-details-container[_ngcontent-%COMP%]{padding-left:100px;padding-right:100px;padding-top:20px}"]});const W=function(o){return["./session",o]};function ee(o,t){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._UZ(7,"button",3),e.qZA()()),2&o){const n=t.$implicit;e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(e.xi3(5,3,n.created,"medium")),e.xp6(3),e.Q6J("routerLink",e.VKq(6,W,n.id))}}const te=function(){return{"min-width":"50rem"}};class h{constructor(){this.sessions=[]}}h.\u0275fac=function(t){return new(t||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-sessions-table"]],inputs:{sessions:"sessions"},decls:3,vars:3,consts:[[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["pButton","","pRipple","","type","button","icon","pi pi-file-edit",1,"p-button-rounded","p-button-text","p-button-secondary",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"p-table",0),e.YNc(1,V,7,0,"ng-template",1),e.YNc(2,ee,8,8,"ng-template",2),e.qZA()),2&t&&e.Q6J("value",n.sessions)("tableStyle",e.DdM(2,te))},dependencies:[_.rH,m.Hq,r.iA,x.jx,w.uU]});var ne=p(1493);const oe=function(){return{width:"550px",height:"270px"}};class b{constructor(t,n){this.sessionsService=t,this.toastr=n,this.closeModalEvent=new e.vpe}ngOnInit(){this.addNewSessionForm=new a.cw({name:new a.NI("")})}addNewSession(){let t={name:this.addNewSessionForm.get("name")?.value};this.showModal=!1,this.closeModalEvent.emit(this.showModal),this.sessionsService.addNewSession(t).subscribe({next:()=>{this.toastr.success("Session added","Succes"),this.addNewSessionForm.reset()},error:n=>{this.toastr.error("Could not create session","Failed"),console.log(n),this.addNewSessionForm.reset()}})}closeModal(){this.showModal=!1,this.closeModalEvent.emit(this.showModal)}}b.\u0275fac=function(t){return new(t||b)(e.Y36(c),e.Y36(C._W))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-new-session-modal"]],inputs:{showModal:"showModal"},outputs:{closeModalEvent:"closeModalEvent"},decls:5,vars:7,consts:[["header","Create Session",3,"visible","resizable","modal","visibleChange","onHide"],[1,"d-flex","flex-column","align-items-stretch"],[1,"d-flex","flex-column",3,"formGroup"],["type","text","pInputText","","placeholder","session name","formControlName","name"],["pButton","","type","button","label","Create session",1,"align-self-end","mt-5",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(s){return n.showModal=s})("onHide",function(){return n.closeModal()}),e.TgZ(1,"div",1)(2,"form",2),e._UZ(3,"input",3),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){return n.addNewSession()}),e.qZA()()()),2&t&&(e.Akn(e.DdM(6,oe)),e.Q6J("visible",n.showModal)("resizable",!1)("modal",!0),e.xp6(2),e.Q6J("formGroup",n.addNewSessionForm))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,m.Hq,ne.V,Z.o]});class T{constructor(t,n){this.skillManagerService=t,this.toastr=n,this.showModal=!1,this.sessions=[]}ngOnInit(){this.loadSessions()}loadSessions(){this.skillManagerService.getAllSessions().subscribe({next:t=>{this.sessions=t},error:t=>{this.toastr.error("Could not load sessions","Failed")}})}showDialog(){this.showModal=!0}hideModal(t){this.showModal=!1,this.loadSessions()}}T.\u0275fac=function(t){return new(t||T)(e.Y36(c),e.Y36(C._W))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-sessions"]],decls:5,vars:2,consts:[[1,"container","sessionPageContainer"],[1,"d-flex","justify-content-end"],["pButton","","type","button","label","Add new session",1,"mb-4",3,"click"],[3,"sessions"],[3,"showModal","closeModalEvent"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.showDialog()}),e.qZA()(),e._UZ(3,"app-sessions-table",3),e.qZA(),e.TgZ(4,"app-new-session-modal",4),e.NdJ("closeModalEvent",function(s){return n.hideModal(s)}),e.qZA()),2&t&&(e.xp6(3),e.Q6J("sessions",n.sessions),e.xp6(1),e.Q6J("showModal",n.showModal))},dependencies:[m.Hq,h,b],styles:[".sessionPageContainer[_ngcontent-%COMP%]{padding-top:20px}"]});const se=[{path:"",component:T},{path:"session/:id",component:f}];class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[_.Bz.forChild(se),_.Bz]});var ie=p(4466);class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[w.ez,u,ie.m]})}}]);