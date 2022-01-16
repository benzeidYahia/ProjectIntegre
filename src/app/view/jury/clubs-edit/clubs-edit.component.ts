/* tslint:disable:no-shadowed-variable */
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {JuryServiceService} from '../../../controller/service/jury-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Clubs} from '../../../controller/model/clubs';
import {Member} from '../../../controller/model/member';
import {JuryDVE} from '../../../controller/model/jury-dve';
import {ClubsMembers} from '../../../controller/model/clubs-members';
import {Activite} from '../../../controller/model/activite';

@Component({
  selector: 'app-clubs-edit',
  templateUrl: './clubs-edit.component.html',
  styleUrls: ['./clubs-edit.component.scss']
})
export class ClubsEditComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: JuryServiceService, private router: Router, private user: LoginService) {
  }

  get listClbs(): Array<Clubs> {
    return this.service.listClbs;
  }

  set listClbs(value: Array<Clubs>) {
    this.service.listClbs = value;
  }

  ngOnInit(): void {
    this.jury = this.user.jury;
    if (this.jury.id == null){
      this.router.navigate(['**']);
    }
  }
  get itemsClubs(): Array<Clubs> {
    if (this.service.itemsClubs == null){
      this.service.itemsClubs = new Array<Clubs>();
    }
    return this.service.itemsClubs;
  }

  set itemsClubs(value: Array<Clubs>) {
    this.service.itemsClubs = value;
  }

  get listClubs(): Array<Clubs> {
    return this.service.listClubs;
  }

  set listClubs(value: Array<Clubs>) {
    this.service.listClubs = value;
  }

  get clubs(): Clubs {
    return this.service.clubs2;
  }

  set clubs(value: Clubs) {
    this.service.clubs2 = value;
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
  get jury(): JuryDVE {
    return this.service.jury;
  }

  set jury(value: JuryDVE) {
    this.service.jury = value;
  }
  get itemsClubsMember(): Array<ClubsMembers> {
    return this.service.itemsClubsMember;
  }

  set itemsClubsMember(value: Array<ClubsMembers>) {
    this.service.itemsClubsMember = value;
  }

  get listClubsMember(): Array<ClubsMembers> {
    return this.service.listClubsMember;
  }

  set listClubsMember(value: Array<ClubsMembers>) {
    this.service.listClubsMember = value;
  }

  get clubsMember(): ClubsMembers {
    return this.service.clubsMember;
  }

  set clubsMember(value: ClubsMembers) {
    this.service.clubsMember = value;
  }
  get itemsMember(): Array<Member> {
    return this.service.itemsMember;
  }

  set itemsMember(value: Array<Member>) {
    this.service.itemsMember = value;
  }

  get listMember(): Array<Member> {
    return this.service.listMember;
  }

  set listMember(value: Array<Member>) {
    this.service.listMember = value;
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
  get activite(): Activite {
    return this.service.activite;
  }

  set activite(value: Activite) {
    this.service.activite = value;
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
  public editClub() {
    this.submitted = true;
    if (this.clubs.image){
      this.clubs.image = this.urlfind(this.clubs.image);
    }
    this.service.updateClubs().subscribe(data => {
      this.service.findClubsActif().subscribe( data => this.listClbs = data);
      this.service.findClubsInActif().subscribe( data => this.itemsClubs = data);
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
  public hideEditDialog() {
    this.editClbDialog = false;
    this.submitted = false;
  }
}
