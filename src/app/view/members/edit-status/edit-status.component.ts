/* tslint:disable:no-shadowed-variable */
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Activite} from '../../../controller/model/activite';
import {Clubs} from '../../../controller/model/clubs';
import {Member} from '../../../controller/model/member';
import {ClubsMembers} from '../../../controller/model/clubs-members';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.scss']
})
export class EditStatusComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService, public sanitizer: DomSanitizer,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }
  get clubsMember(): ClubsMembers {
    return this.service.clubsMember;
  }

  set clubsMember(value: ClubsMembers) {
    this.service.clubsMember = value;
  }
  get clubs(): Clubs {
    return this.service.clubs;
  }

  set clubs(value: Clubs) {
    this.service.clubs = value;
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
  get createDialog(): boolean {
    return this.service.createDialog;
  }
  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  get editStatusDialog(): boolean {
    return this.service.editStatusDialog;
  }

  set editStatusDialog(value: boolean) {
    this.service.editStatusDialog = value;
  }
  public hideEditStatusDialog() {
    this.editStatusDialog = false;
    this.submitted = false;
  }

  get itemsActivite(): Array<Activite> {
    return this.service.itemsActivite;
  }

  set itemsActivite(value: Array<Activite>) {
    this.service.itemsActivite = value;
  }
  get listClubsMember(): Array<ClubsMembers> {
    return this.service.listClubsMember;
  }

  set listClubsMember(value: Array<ClubsMembers>) {
    this.service.listClubsMember = value;
  }
  public editStatus() {
    this.submitted = true;
    this.service.EditStatus().subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Status edited',
        life: 3000
      });
    });
    this.editStatusDialog = false;
  }
  ngOnInit(): void {
  }

}
