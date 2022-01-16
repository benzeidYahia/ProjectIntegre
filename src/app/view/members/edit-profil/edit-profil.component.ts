import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Member} from '../../../controller/model/member';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }
  get editProfil(): boolean {
    return this.service.editProfil;
  }

  set editProfil(value: boolean) {
    this.service.editProfil = value;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }
  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  ngOnInit(): void {
  }
  get member(): Member {
    return this.service.member2;
  }

  set member(value: Member) {
    this.service.member2 = value;
  }
  get members(): Member {
    return this.service.member;
  }

  set members(value: Member) {
    this.service.member = value;
  }

  public hideEditDialog() {
    this.service.findMember(this.member.login, this.member.password).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          this.members = data;
        });
    this.editProfil = false;
    this.submitted = false;
  }
  public urlfind(link: any) {
    if (link !== null) {
      const url = link;
      const found = url.match(/d\/([A-Za-z0-9\-\_]+)/);
      if (found !== null) {
        console.log('hadaaaaa found== ' + found[1]);
        return 'https://drive.google.com/uc?export=view&id=' + found[1];
      }
    }
    return link;
  }
  public editProfile() {
    this.submitted = true;
    if (this.member.image){
      this.member.image = this.urlfind(this.member.image);
    }
    this.service.EditProfile().subscribe(data => {
      this.service.findMember(this.member.login, this.member.password).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          data => {
            this.members = data;
          });
      // tslint:disable-next-line:no-shadowed-variable
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Profil edited',
        life: 3000
      });
    }, error => this.messageService.add({
          severity: 'error',
          summary: 'Warning',
          detail: 'Error in information',
      life: 3000
    })
    );
    this.editProfil = false;
  }
}
