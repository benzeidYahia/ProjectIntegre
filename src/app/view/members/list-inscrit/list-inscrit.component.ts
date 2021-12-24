import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Clubs} from '../../../controller/model/clubs';
import {Member} from '../../../controller/model/member';
import {ClubsMembers} from '../../../controller/model/clubs-members';
import {Activite} from '../../../controller/model/activite';

@Component({
  selector: 'app-list-inscrit',
  templateUrl: './list-inscrit.component.html',
  styleUrls: ['./list-inscrit.component.scss']
})
export class ListInscritComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
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
  ngOnInit(): void {
    console.log(this.member.id);
    this.service.findClubsMemberInscrit(this.member.id).subscribe(data => this.itemsClubsMember = data);

  }

  get itemsActivite(): Array<Activite> {
    return this.service.itemsActivite;
  }

  set itemsActivite(value: Array<Activite>) {
    this.service.itemsActivite = value;
  }
  return(){
    console.log(this.clubsMember.clubs.libelle);
    this.service.findClubsActivitie().subscribe(data => this.itemsActivite = data);
    this.service.findClubsMembers().subscribe(data => this.listClubsMember = data);
    this.router.navigate(['pages/clubsAdherer']);
  }
  public accepte(club: ClubsMembers) {
    this.submitted = true;
    club.etat = true;
    console.log(club.status);
    console.log( this.clubsMember.status);
    club.dateAdherence = new Date();
    this.service.AcceptClubsMember(club).subscribe(data => {
      // @ts-ignore
      this.listClubsMember.push({...data});
      this.service.findClubsMemberInscrit(this.member.id).subscribe(data => this.itemsClubsMember = data);
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Clubs added',
        life: 3000
      });
    });
  }

}
