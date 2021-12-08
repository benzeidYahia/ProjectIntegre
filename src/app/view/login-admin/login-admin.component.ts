/* tslint:disable:adjacent-overload-signatures variable-name */
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../controller/service/login.service';
import {Member} from '../../controller/model/member';
import {JuryDVE} from '../../controller/model/jury-dve';
import {SuperAdminDVE} from '../../controller/model/super-admin-dve';
import {Route, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: LoginService, private router: Router, private menu: AppComponent) {

  }
  private _role: string;
  private _login: string;
  private _password: string;
  private _correct: boolean;


  get model(): any[] {
    return this.service.model;
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

  get admin(): SuperAdminDVE {
    return this.service.admin;
  }

  set admin(value: SuperAdminDVE) {
    this.service.admin = value;
  }

  set model(value: any[]) {
    this.service.model = value;
  }

  get correct(): boolean {
    return this._correct;
  }

  set correct(value: boolean) {
    this._correct = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
    get userMember(): any[] {
        return this.service.user;
    }

    set userMember(value: any[]) {
        this.service.user = value;
    }

      public findUser() {
          this.service.findAdminDVE(this.login, this.password).subscribe(
              data => {
                this.admin = data;
                this.correct = true;
                this.menu.layoutMode = 'slim';
                this.model = [
                     {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
                  ];
                }, (errorResponse: HttpErrorResponse) => {
                  this.admin = null;
                  this.correct = false;

                  console.log(errorResponse.message);

              });

          this.service.findJury(this.login, this.password).subscribe(
                      data => {
                          this.jury = data;
                          this.correct = true;
                          this.menu.layoutMode = 'slim';
                          this.model = [
                              {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['/']},
                          ];
                      }, (errorResponse: HttpErrorResponse) => {
                  this.jury = null;
                  this.correct = false;

                  console.log(errorResponse.message);

              });
          this.service.findMember(this.login, this.password).subscribe(
              data => {
                  this.member = data;
                  this.correct = true;
                  this.menu.layoutMode = 'slim';
                  this.model = [
                      {label: 'Profil', icon: 'pi pi-fw pi-user', routerLink: ['pages/profil']},
                      {label: 'Clubs', icon: 'pi pi-fw pi-table', routerLink: ['pages/clubsMember']},
                      {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']}
                  ];
                  this.router.navigate(['pages/profil']);
              }, (errorResponse: HttpErrorResponse) => {
                  this.member = null;
                  this.correct = false;
                  console.log(errorResponse.message);

              });
      }
  public choose()
  {
    document.getElementById('log-pass').style.visibility = 'hidden';
  }

  ngOnInit(): void {
  }

}
