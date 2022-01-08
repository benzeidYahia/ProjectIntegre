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
import {Tresorerie} from '../../../controller/model/tresorerie';

@Component({
  selector: 'app-tresorerie',
  templateUrl: './tresorerie.component.html',
  styleUrls: ['./tresorerie.component.scss']
})
export class TresorerieComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }
  get itemsTresor(): Array<Tresorerie> {
    return this.service.itemsTresor;
  }

  set itemsTresor(value: Array<Tresorerie>) {
    this.service.itemsTresor = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  get listTresor(): Array<Tresorerie> {
   return this.service.listTresor;
  }

  set listTresor(value: Array<Tresorerie>) {
    this.service.listTresor = value;
  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }
  get createTresorDialog(): boolean {
    return this.service.createTresorDialog;
  }

  set createTresorDialog(value: boolean) {
    this.service.createTresorDialog = value;
  }
  public openTresor() {
    this.submitted = false;
    this.createTresorDialog = true;
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
    this.service.findActivitieBudget(this.activite.id).subscribe(data => this.itemsTresor = data);
    if (this.member.id == null){
      this.router.navigate(['**']);
    }
  }

}
