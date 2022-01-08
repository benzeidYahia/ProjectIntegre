import { Component, OnInit } from '@angular/core';
import {DemandeCreationClb} from '../../../controller/model/demande-creation-clb';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Activite} from '../../../controller/model/activite';
import {Member} from '../../../controller/model/member';

@Component({
  selector: 'app-creation-club',
  templateUrl: './creation-club.component.html',
  styleUrls: ['./creation-club.component.scss']
})
export class CreationClubComponent implements OnInit {
  uploadedFiles: any ;
  selectedFile: File;
  constructor(private messageService: MessageService, public sanitizer: DomSanitizer,
              private confirmationService: ConfirmationService, private httpClient: HttpClient,
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
  onUpload(event) {
    this.selectedFile = (event.target.files[0] as File);
    const fd = new FormData();
    // const request = new XMLHttpRequest();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    // request.open("POST","http://edugamescenter.com/uploadimage.php");
    // request.send(fd);
    // http://localhost:4200/assets/image
    this.httpClient.post('http://localhost:4200/upload.php', fd)
        .subscribe(res => {
          console.log(res);
        });
  }
  public saveRequest() {
    this.submitted = true;
    this.demande.member = this.user.member;
    this.demande.dateCreation = new Date();
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
