/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../model/member';
import {ClubsMembers} from '../model/clubs-members';
import {Clubs} from '../model/clubs';
import {Activite} from '../model/activite';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private http: HttpClient) {
  }
  private memberUrl = environment.memberUrl;
  private _itemsMember: Array<Member>;
  private _listMember: Array<Member>;
  private _member: Member;
  private _itemsClubsMember: Array<ClubsMembers>;
  private _listClubsMember: Array<ClubsMembers>;
  private _clubsMember: ClubsMembers;
  private _itemsClubs: Array<Clubs>;
  private _listClbs: Array<Clubs>;
  private _listClubs: Array<Clubs>;
  private _clubs: Clubs;

   private _activite: Activite;
  private _itemsActivite: Array<Activite>;
  private _listActivite: Array<Activite>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  get activite(): Activite {
    if (this._activite == null){
      this._activite = new Activite();
    }
    return this._activite;
  }

  set activite(value: Activite) {
    this._activite = value;
  }

  get itemsActivite(): Array<Activite> {
    if (this._itemsActivite == null){
      this._itemsActivite = new Array<Activite>();
    }
    return this._itemsActivite;
  }

  set itemsActivite(value: Array<Activite>) {
    this._itemsActivite = value;
  }

  get listActivite(): Array<Activite> {
    if (this._listActivite == null){
      this._listActivite = new Array<Activite>();
    }
    return this._listActivite;
  }

  set listActivite(value: Array<Activite>) {
    this._listActivite = value;
  }


  get itemsClubs(): Array<Clubs> {
    if (this._itemsClubs == null){
      this._itemsClubs = new Array<Clubs>();
    }
    return this._itemsClubs;
  }

  set itemsClubs(value: Array<Clubs>) {
    this._itemsClubs = value;
  }

  get listClbs(): Array<Clubs> {
    if (this._listClbs == null){
      this._listClbs = new Array<Clubs>();
    }
    return this._listClbs;
  }

  set listClbs(value: Array<Clubs>) {
    this._listClbs = value;
  }

  get listClubs(): Array<Clubs> {
    if (this._listClubs == null){
      this._listClubs = new Array<Clubs>();
    }
    return this._listClubs;
  }

  set listClubs(value: Array<Clubs>) {
    this._listClubs = value;
  }

  get clubs(): Clubs {
    if (this._clubs == null){
      this._clubs = new Clubs();
    }
    return this._clubs;
  }

  set clubs(value: Clubs) {
    this._clubs = value;
  }

  get itemsClubsMember(): Array<ClubsMembers> {
    if (this._itemsClubsMember == null){
      this._itemsClubsMember = new Array<ClubsMembers>();
    }
    return this._itemsClubsMember;
  }

  set itemsClubsMember(value: Array<ClubsMembers>) {
    this._itemsClubsMember = value;
  }

  get listClubsMember(): Array<ClubsMembers> {
    if (this._listClubsMember == null){
      this._listClubsMember = new Array<ClubsMembers>();
    }
    return this._listClubsMember;
  }

  set listClubsMember(value: Array<ClubsMembers>) {
    this._listClubsMember = value;
  }

  get clubsMember(): ClubsMembers {
    if (this._clubsMember == null){
      this._clubsMember = new ClubsMembers();
    }
    return this._clubsMember;
  }

  set clubsMember(value: ClubsMembers) {
    this._clubsMember = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }
  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }
  get itemsMember(): Array<Member> {
    if (this._itemsMember == null){
      this._itemsMember = new Array<Member>();
    }
    return this._itemsMember;
  }

  set itemsMember(value: Array<Member>) {
    this._itemsMember = value;
  }

  get listMember(): Array<Member> {
    if (this._listMember == null){
      this._listMember = new Array<Member>();
    }
    return this._listMember;
  }

  set listMember(value: Array<Member>) {
    this._listMember = value;
  }

  get member(): Member {
    if (this._member == null){
      this._member = new Member();
    }
    return this._member;
  }

  set member(value: Member) {
    this._member = value;
  }
  public SaveClubsMember(): Observable<number> {
    return this.http.post<number>(this.memberUrl + 'clubsmembers/', this.clubsMember);
  }
  public AcceptClubsMember(club: ClubsMembers): Observable<number> {
    return this.http.put<number>(this.memberUrl + 'clubsmembers/', club);
  }
  public SaveActivite(): Observable<number> {
    return this.http.post<number>(this.memberUrl + 'activite/', this.activite);
  }
  public EditActivite(): Observable<number> {
    return this.http.put<number>(this.memberUrl + 'activite/', this.activite);
  }
  public create(): Observable<Member> {
    return this.http.post<Member>(this.memberUrl + 'member/', this.member);
  }
  public findAllMember(): Observable<Array<Member>> {
    return this.http.get<Array<Member>>(this.memberUrl );
  }
  public findClubsMember(id: number): Observable<Array<ClubsMembers>> {
    return this.http.get<Array<ClubsMembers>>( 'http://localhost:8036/member/clubsmembers/member/id/' + id + '/etat/1' );
  }
  public findClubsMemberInscrit(id: number): Observable<Array<ClubsMembers>> {
    return this.http.get<Array<ClubsMembers>>( 'http://localhost:8036/member/clubsmembers/libelle/' + this.clubsMember.clubs.libelle + '/etat/0' );
  }
  public findAllClubs(): Observable<Array<Clubs>> {
    return this.http.get<Array<Clubs>>(this.memberUrl + 'clubs/' );
  }
  public findAllClubsNotIn(id: number[]): Observable<Array<Clubs>> {
    console.log(id.reverse());
    return this.http.post<Array<Clubs>>('http://localhost:8036/member/clubs/clubs/', id );
  }
  public findClubsActivitie(): Observable<Array<Activite>> {
    console.log(this.clubsMember.clubs.libelle);
    return this.http.get<Array<Activite>>('http://localhost:8036/member/activite/clubs/libelle/' + this.clubsMember.clubs.libelle );
  }
  public findClubsMembers(): Observable<Array<ClubsMembers>> {
    console.log(this.clubsMember.clubs.libelle);
    return this.http.get<Array<ClubsMembers>>('http://localhost:8036/member/clubsmembers/libelle/' + this.clubsMember.clubs.libelle + '/etat/1' );
  }
  public deleteClubsMember(clubsMember: ClubsMembers): Observable<number> {
    return this.http.delete<number>(this.memberUrl + 'clubsmembers/id/' + clubsMember.id);
  }
  public deleteMultipleClubsMemberByid(): Observable<number> {
    return this.http.post<number>(this.memberUrl + 'clubsmembers/delete-Multi', this.listClubsMember);
  }
  public deleteMultipleClubsMemberIndexById() {
    for (const item of this.listClubsMember) {
      this.deleteClubsMemberIndexById(item.id);
    }
  }
  public deleteClubsMemberIndexById(id: number) {
    this.itemsClubsMember.splice(this.findClubsMemberIndexById(id), 1);
  }
  public findClubsMemberIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.itemsClubsMember.length; i++) {
      if (this.itemsClubsMember[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
