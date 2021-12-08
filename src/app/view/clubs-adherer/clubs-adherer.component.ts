import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MemberServiceService} from '../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../controller/service/login.service';
import {Clubs} from '../../controller/model/clubs';
import {Member} from '../../controller/model/member';
import {ClubsMembers} from '../../controller/model/clubs-members';
import {Activite} from '../../controller/model/activite';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-clubs-adherer',
  templateUrl: './clubs-adherer.component.html',
  styleUrls: ['./clubs-adherer.component.scss']
})
export class ClubsAdhererComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService, public sanitizer: DomSanitizer,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  public openCreateActivite() {
    this.submitted = false;
    this.createDialog = true;
    this.activite = new Activite();
  }
  public inscrit(){
    this.service.findClubsMemberInscrit(this.member.id).subscribe(data => this.itemsClubsMember = data);
    this.router.navigate(['pages/listInscrit']);
  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }
  public openEditActivite(activite: Activite) {
    this.submitted = false;
    this.editDialog = true;
    this.activite = activite;
  }
  get listClbs(): Array<Clubs> {
    return this.service.listClbs;
  }

  set listClbs(value: Array<Clubs>) {
    this.service.listClbs = value;
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
  get listActivite(): Array<Activite> {
    return this.service.listActivite;
  }

  set listActivite(value: Array<Activite>) {
    this.service.listActivite = value;
  }
  ngOnInit(): void {
  }
  public delete(clubsMember: ClubsMembers) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this member: ' + clubsMember.clubs.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteClubsMember(clubsMember).subscribe(data => {
          this.itemsClubsMember = this.itemsClubsMember.filter(val => val.id !== this.clubsMember.id);
          this.service.findAllClubs().subscribe(data => this.itemsClubs = data);
          this.service.findClubsMember(this.user.member.id).subscribe(data => this.itemsClubsMember = data);

          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'you left the club',
            life: 3000
          });
        });
      }
    });
  }
}
