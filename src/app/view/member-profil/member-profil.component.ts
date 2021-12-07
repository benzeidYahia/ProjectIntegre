import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MemberServiceService} from '../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {Member} from '../../controller/model/member';
import {LoginService} from '../../controller/service/login.service';

@Component({
  selector: 'app-member-profil',
  templateUrl: './member-profil.component.html',
  styleUrls: ['./member-profil.component.scss']
})
export class MemberProfilComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService, private user: LoginService,
              private service: MemberServiceService, private router: Router) {
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
  public edit() {
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
  ngOnInit(): void {
    this.member = this.user.member;
  }
}
