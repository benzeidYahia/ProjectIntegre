import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Member} from '../../../controller/model/member';
import {JuryDVE} from '../../../controller/model/jury-dve';
import {SuperAdminDVE} from '../../../controller/model/super-admin-dve';
import {LoginService} from '../../../controller/service/login.service';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService, private menu: AppComponent,
              private service: MemberServiceService, private serviceLogin: LoginService, private router: Router) {
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  get member(): Member {
    return this.service.member;
  }

  set member(value: Member) {
    this.service.member = value;
  }
  public save() {
    console.log(this.member);
    this.submitted = true;
    this.service.create().subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Registration added, please check your email to get your password.',
        life: 4000
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Warning',
        detail: 'Registration canceled',
        life: 3000
      });
      console.log(error);
    });
    this.member = new Member();
  }
  set model(value: any[]) {
    this.serviceLogin.model = value;
  }
  ngOnInit(): void {
    this.member = new Member();
    this.model = null;
    this.menu.layoutMode = 'Overlay';
  }

}
