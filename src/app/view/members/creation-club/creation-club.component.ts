import { Component, OnInit } from '@angular/core';
import {DemandeCreationClb} from '../../../controller/model/demande-creation-clb';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Member} from '../../../controller/model/member';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-creation-club',
  templateUrl: './creation-club.component.html',
  styleUrls: ['./creation-club.component.scss']
})
export class CreationClubComponent implements OnInit {

  constructor(private messageService: MessageService, public sanitizer: DomSanitizer,
              private confirmationService: ConfirmationService, private http: HttpClient,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }

  ngOnInit(): void {
  }
  get demande(): DemandeCreationClb {
    return this.service.demande;
  }

  set demande(value: DemandeCreationClb) {
    this.service.demande = value;
  }

  get itemsdemande(): Array<DemandeCreationClb> {
    return this.service.itemsdemande;
  }

  set itemsdemande(value: Array<DemandeCreationClb>) {
    this.service.itemsdemande = value;
  }

  get listdemande(): Array<DemandeCreationClb> {
    return this.service.listdemande;
  }

  set listdemande(value: Array<DemandeCreationClb>) {
    this.service.listdemande = value;
  }
  get submitted(): boolean {
    return this.service.submitted2;
  }

  set submitted(value: boolean) {
    this.service.submitted2 = value;
  }
  get member(): Member {
    return this.service.member;
  }

  set member(value: Member) {
    this.service.member = value;
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
  public saveRequest() {
    this.submitted = true;
    this.demande.member = this.user.member;
    this.demande.dateCreation = new Date();
    if (this.demande.image) {
      console.log(this.demande.image);
      this.demande.image = this.urlfind(this.demande.image);
    }
    this.service.SaveRequest().subscribe(data => {
        // tslint:disable-next-line:no-shadowed-variable
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Request Sent',
          life: 3000
        });
      });
    this.demande = new DemandeCreationClb();

  }
}
