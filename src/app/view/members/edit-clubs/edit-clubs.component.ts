/* tslint:disable:no-shadowed-variable */
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Member} from '../../../controller/model/member';
import {Clubs} from '../../../controller/model/clubs';
import {Activite} from '../../../controller/model/activite';
import {ClubsMembers} from '../../../controller/model/clubs-members';

@Component({
  selector: 'app-edit-clubs',
  templateUrl: './edit-clubs.component.html',
  styleUrls: ['./edit-clubs.component.scss']
})
export class EditClubsComponent implements OnInit {
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
    return this.service.member;
  }

  set member(value: Member) {
    this.service.member = value;
  }

  get clubs(): Clubs {
    return this.service.clubs;
  }

  set clubs(value: Clubs) {
    this.service.clubs = value;
  }
  public hideEditDialog() {
    this.editClbDialog = false;
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
  get editClbDialog(): boolean {
    return this.service.editClbDialog;
  }

  set editClbDialog(value: boolean) {
    this.service.editClbDialog = value;
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
  public editClub() {
    this.submitted = true;
    if (this.clubs.image){
      this.clubs.image = this.urlfind(this.clubs.image);
    }
    this.service.EditClub().subscribe(data => {
      this.service.findClubsActivitie().subscribe(data => this.itemsActivite = data);
      this.service.findClubsMembers().subscribe(data => this.listClubsMember = data);
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
    this.editClbDialog = false;
  }

}
