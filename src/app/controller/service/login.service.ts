/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../model/member';
import {JuryDVE} from '../model/jury-dve';
import {SuperAdminDVE} from '../model/super-admin-dve';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private _member: Member;
  private _user: any[];
   private _jury: JuryDVE;
  private _admin: SuperAdminDVE;
  private _model: any[];


  get user(): any[] {
    return this._user;
  }

  set user(value: any[]) {
    this._user = value;
  }
  get model(): any[] {
    return this._model;
  }

  set model(value: any[]) {
    this._model = value;
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

  get jury(): JuryDVE {
    if (this._jury == null){
      this._jury = new JuryDVE();
    }
    return this._jury;
  }

  set jury(value: JuryDVE) {
    this._jury = value;
  }

  get admin(): SuperAdminDVE {
    if (this._admin == null){
      this._admin = new SuperAdminDVE();
    }
    return this._admin;
  }

  set admin(value: SuperAdminDVE) {
    this._admin = value;
  }

  public findMember(username: string, password: string): Observable<Member>
  {
    return this.http.get<Member>('http://localhost:8036/member/member/login/' + username + '/password/' + password);
  }

  public findJury(username: string, password: string): Observable<JuryDVE>
  {
    return this.http.get<JuryDVE>('http://localhost:8036/jury/jury/login/' + username + '/password/' + password);
  }

  public findAdminDVE(username: string, password: string): Observable<SuperAdminDVE>
  {
    return this.http.get<SuperAdminDVE>('http://localhost:8036/admin/superadmin/login/' + username + '/password/' + password);
  }

  constructor(private http: HttpClient) { }
}
