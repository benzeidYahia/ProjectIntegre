/* tslint:disable:no-shadowed-variable align prefer-for-of */
import { Component, OnInit } from '@angular/core';
import {Member} from '../../../controller/model/member';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {ClubsMembers} from '../../../controller/model/clubs-members';
import {Clubs} from '../../../controller/model/clubs';
import {LoginService} from '../../../controller/service/login.service';
import {Activite} from '../../../controller/model/activite';


@Component({
  selector: 'app-member-clubs',
  templateUrl: './member-clubs.component.html',
  styleUrls: ['./member-clubs.component.scss']
})
export class MemberClubsComponent implements OnInit {
ids: Array<number>;
sortOrder: number;
sortField: string;
cols: any[];
tabid: any[];
listId: Array<number>;
lengthId: number;
i = 0;
sortKey: any;
sortOptions: SelectItem[];
  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }

  get listClbs(): Array<Clubs> {
    return this.service.listClbs;
  }

  set listClbs(value: Array<Clubs>) {
    this.service.listClbs = value;
  }

  ngOnInit(): void {
    this.member = this.user.member;
    this.member = this.user.member;
    console.log(this.user.member.id);
    if (this.member.id == null){
      this.router.navigate(['**']);
    }
    this.ids = new Array<number>();
    // this.service.findAllClubs().subscribe(data => this.itemsClubs = data);
    this.service.findClubsMember(this.member.id).subscribe(data => {
      this.itemsClubsMember = data;
      this.service.findClubIds().subscribe( data => {
        this.ids = data;
        console.log(this.ids);
        // tslint:disable-next-line:triple-equals
        if (this.ids.values() == null){
          this.service.findAllClubsNotIn([0]).subscribe(data => this.items2ClubsMember = data);
          console.log(this.items2ClubsMember);
        }else{
          this.service.findAllClubsNotIn(this.ids).subscribe(data => this.items2ClubsMember = data);
        }
        console.log(this.items2ClubsMember);
      });
     });

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
  }get items2ClubsMember(): Array<ClubsMembers> {
    return this.service.items2ClubsMember;
  }

  set items2ClubsMember(value: Array<ClubsMembers>) {
    this.service.items2ClubsMember = value;
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
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to quit the selected Club?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleClubsMemberByid().subscribe(
            data => {
              this.service.deleteMultipleClubsMemberIndexById();
              // tslint:disable-next-line:no-shadowed-variable
              this.service.findAllClubs().subscribe(data => this.itemsClubs = data);
              // tslint:disable-next-line:no-shadowed-variable
              this.service.findClubsMember(this.member.id).subscribe(data => {
                this.itemsClubsMember = data;
                this.service.findClubIds().subscribe( data => {
                  this.ids = data;
                  console.log(this.ids);
                  this.service.findAllClubsNotIn(this.ids).subscribe(data => this.items2ClubsMember = data);

                });
              });              this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'you left the club',
                life: 3000
              });
            });
      }
    });
  }

  public delete(clubsMember: ClubsMembers) {
    this.clubsMember = clubsMember;
    this.confirmationService.confirm({
      message: 'Are you sure you want to quit: ' + clubsMember.clubs.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteClubsMember(clubsMember).subscribe(data => {
          this.service.findAllClubs().subscribe(data => this.itemsClubs = data);
          this.service.findClubsMember(this.member.id).subscribe(data => {
            this.itemsClubsMember = data;
            this.service.findClubIds().subscribe( data => {
              this.ids = data;
              console.log(this.ids);
              this.service.findAllClubsNotIn(this.ids).subscribe(data => this.items2ClubsMember = data);

            });
          });          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'you left the club',
            life: 3000
          });
        });
      }
    });
  }
  public add(club: Clubs) {
    this.submitted = true;
      this.clubsMember.clubs = club;
      this.clubsMember.member = this.user.member;
      this.clubsMember.status = 'Membre';
      console.log( this.clubsMember.status);
      this.clubsMember.dateAdherence = new Date();
      this.itemsClubs = new Array<Clubs>();
      this.service.SaveClubsMember().subscribe(data => {
        this.service.findAllClubs().subscribe(data => this.itemsClubs = data);
        this.service.findClubsMember(this.member.id).subscribe(data => {
          this.itemsClubsMember = data;
          this.service.findClubIds().subscribe( data => {
            this.ids = data;
            console.log(this.ids);
            this.service.findAllClubsNotIn(this.ids).subscribe(data => this.items2ClubsMember = data);

          });
        });        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Clubs added',
          life: 3000
        });
      });
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
  public view(clubs: ClubsMembers){
    this.clubsMember = clubs;
    console.log(this.clubsMember.clubs.libelle);
    this.service.findClubsActivitie().subscribe(data => this.itemsActivite = data);
    this.service.findClubsMembers().subscribe(data => this.listClubsMember = data);
    console.log(this.itemsActivite);
    this.router.navigate(['pages/clubsAdherer']);
  }
}
