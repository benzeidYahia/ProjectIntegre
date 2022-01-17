/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../model/member';
import {ClubsMembers} from '../model/clubs-members';
import {Clubs} from '../model/clubs';
import {Activite} from '../model/activite';
import {Tresorerie} from '../model/tresorerie';
import {DemandeCreationClb} from '../model/demande-creation-clb';

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
  private _member2: Member;
  private _memberStatus: Member;
  private _itemsTresor: Array<Tresorerie>;
  private _listTresor: Array<Tresorerie>;
  private _Tresor: Tresorerie;
  private _itemsClubsMember: Array<ClubsMembers>;
  private _items2ClubsMember: Array<ClubsMembers>;
  private _listClubsMember: Array<ClubsMembers>;
  private _clubsMember: ClubsMembers;
  private _clubsMember2: ClubsMembers;
  private _itemsClubs: Array<Clubs>;
  private _listClbs: Array<Clubs>;
  private _listClubs: Array<Clubs>;
  private _clubs: Clubs;
  private _activite: Activite;
  private _itemsActivite: Array<Activite>;
  private _listActivite: Array<Activite>;
  private _createDialog: boolean;
  private _createTresorDialog: boolean;
  private _editDialog: boolean;
  private _editStatusDialog: boolean;
  private _editClbDialog: boolean;
  private _editTresorerieDialog: boolean;
  private _editProfil: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _submitted2: boolean;
  private _submittedTresorerie: boolean;
  private _demande: DemandeCreationClb;
  private _itemsdemande: Array<DemandeCreationClb>;
  private _listdemande: Array<DemandeCreationClb>;


  get member2(): Member {
    if (this._member2 == null){
      this._member2 = new Member();
    }
    return this._member2;
  }

  set member2(value: Member) {
    this._member2 = value;
  }

  get editClbDialog(): boolean {
    return this._editClbDialog;
  }

  set editClbDialog(value: boolean) {
    this._editClbDialog = value;
  }

  get editProfil(): boolean {
    return this._editProfil;
  }

  set editProfil(value: boolean) {
    this._editProfil = value;
  }

  get editStatusDialog(): boolean {
    return this._editStatusDialog;
  }

  set editStatusDialog(value: boolean) {
    this._editStatusDialog = value;
  }

  get submitted2(): boolean {
    return this._submitted2;
  }

  set submitted2(value: boolean) {
    this._submitted2 = value;
  }

  get demande(): DemandeCreationClb {
    if (this._demande == null){
      this._demande = new DemandeCreationClb();
    }
    return this._demande;
  }

  set demande(value: DemandeCreationClb) {
    this._demande = value;
  }

  get itemsdemande(): Array<DemandeCreationClb> {
    if (this._itemsdemande == null){
      this._itemsdemande = new Array<DemandeCreationClb>();
    }
    return this._itemsdemande;
  }

  set itemsdemande(value: Array<DemandeCreationClb>) {
    this._itemsdemande = value;
  }

  get listdemande(): Array<DemandeCreationClb> {
    if (this._listdemande == null){
      this._listdemande = new Array<DemandeCreationClb>();
    }
    return this._listdemande;
  }

  set listdemande(value: Array<DemandeCreationClb>) {
    this._listdemande = value;
  }

  get createTresorDialog(): boolean {
    return this._createTresorDialog;
  }

  set createTresorDialog(value: boolean) {
    this._createTresorDialog = value;
  }

  get itemsTresor(): Array<Tresorerie> {
    if ( this._itemsTresor ==  null){
      this._itemsTresor = new Array<Tresorerie>();
    }
    return this._itemsTresor;
  }

  set itemsTresor(value: Array<Tresorerie>) {
    this._itemsTresor = value;
  }

  get listTresor(): Array<Tresorerie> {
    if ( this._listTresor ==  null){
      this._listTresor = new Array<Tresorerie>();
    }
    return this._listTresor;
  }

  set listTresor(value: Array<Tresorerie>) {
    this._listTresor = value;
  }

  get Tresor(): Tresorerie {
    if ( this._Tresor ==  null){
      this._Tresor = new Tresorerie();
    }
    return this._Tresor;
  }

  set Tresor(value: Tresorerie) {
    this._Tresor = value;
  }

  get editTresorerieDialog(): boolean {
    return this._editTresorerieDialog;
  }

  set editTresorerieDialog(value: boolean) {
    this._editTresorerieDialog = value;
  }

  get submittedTresorerie(): boolean {
    return this._submittedTresorerie;
  }

  set submittedTresorerie(value: boolean) {
    this._submittedTresorerie = value;
  }

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
  get items2ClubsMember(): Array<ClubsMembers> {
    if (this._items2ClubsMember == null){
      this._items2ClubsMember = new Array<ClubsMembers>();
    }
    return this._items2ClubsMember;
  }

  set items2ClubsMember(value: Array<ClubsMembers>) {
    this._items2ClubsMember = value;
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
  get clubsMember2(): ClubsMembers {
    if (this._clubsMember2 == null){
      this._clubsMember2 = new ClubsMembers();
    }
    return this._clubsMember2;
  }

  set clubsMember2(value: ClubsMembers) {
    this._clubsMember2 = value;
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

  set memberStatus(value: Member) {
    this._memberStatus = value;
  }
  get memberStatus(): Member {
    if (this._memberStatus == null){
      this._memberStatus = new Member();
    }
    return this._memberStatus;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set member(value: Member) {
    this._member = value;
  }
  public SaveClubsMember(): Observable<number> {
    return this.http.post<number>(this.memberUrl + 'clubsmembers/', this.clubsMember);
  }
  public SaveTresor(): Observable<number> {
    return this.http.post<number>(this.memberUrl + 'tresorerie/', this.Tresor);
  }
  public AcceptClubsMember(club: ClubsMembers): Observable<number> {
    return this.http.put<number>(this.memberUrl + 'clubsmembers/', club);
  }
  public SaveActivite(): Observable<number> {
    return this.http.post<number>(this.memberUrl + 'activite/', this.activite);
  }
  public SaveRequest(): Observable<number> {
    return this.http.post<number>(this.memberUrl + 'demandecreationclb/', this.demande);
  }
  public EditActivite(): Observable<number> {
    return this.http.put<number>(this.memberUrl + 'activite/', this.activite);
  }
  public EditProfile(): Observable<number> {
    return this.http.put<number>(this.memberUrl + 'member/', this.member);
  }
  public EditClub(): Observable<number> {
    return this.http.put<number>(this.memberUrl + 'clubs/', this.clubs);
  }
  public EditStatus(): Observable<number> {
    return this.http.put<number>(this.memberUrl + 'clubsmembers/', this.clubsMember2);
  }
  public create(): Observable<Member> {
    return this.http.post<Member>(this.memberUrl + 'member/', this.member);
  }
  public findActivitieBudget(id: number): Observable<Array<Tresorerie>> {
    return this.http.get<Array<Tresorerie>>( 'http://localhost:8036/member/tresorerie/activite/id/' + id  );
  }
  public findClubIds(): Observable<Array<number>> {
    return this.http.get<Array<number>>(this.memberUrl + 'clubsmembers/clubs/id/' + this.member.id );
  }
  public findClubsMember(id: number): Observable<Array<ClubsMembers>> {
    return this.http.get<Array<ClubsMembers>>( 'http://localhost:8036/member/clubsmembers/member/id/' + id + '/etat/1/status/actif' );
  }
  public findClubsMemberInscrit(id: number): Observable<Array<ClubsMembers>> {
    return this.http.get<Array<ClubsMembers>>( 'http://localhost:8036/member/clubsmembers/libelle/' + this.clubsMember.clubs.libelle + '/etat/0/status/actif' );
  }
  public findAllClubs(): Observable<Array<Clubs>> {
    return this.http.get<Array<Clubs>>(this.memberUrl + 'clubs/' );
  }
  public findAllClubsNotIn(id: Array<number>): Observable<Array<ClubsMembers>> {
    console.log(id.reverse());
    return this.http.post<Array<ClubsMembers>>('http://localhost:8036/member/clubsmembers/clubsM/true', id );
  }
  public findClubsActivitie(): Observable<Array<Activite>> {
    console.log(this.clubsMember.clubs.libelle);
    return this.http.get<Array<Activite>>('http://localhost:8036/member/activite/activite/libelle/' + this.clubsMember.clubs.libelle );
  }
  public findClubsMembers(): Observable<Array<ClubsMembers>> {
    console.log(this.clubsMember.clubs.libelle);
    return this.http.get<Array<ClubsMembers>>('http://localhost:8036/member/clubsmembers/libelle/' + this.clubsMember.clubs.libelle + '/etat/1/status/actif' );
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
  public findMember(username: string, password: string): Observable<Member>
  {
    return this.http.get<Member>('http://localhost:8036/member/member/login/' + username + '/password/' + password);
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
