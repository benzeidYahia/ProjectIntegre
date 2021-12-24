import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MemberServiceService} from '../../../controller/service/member-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Clubs} from '../../../controller/model/clubs';
import {Member} from '../../../controller/model/member';
import {ClubsMembers} from '../../../controller/model/clubs-members';
import {Activite} from '../../../controller/model/activite';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-activite',
  templateUrl: './create-activite.component.html',
  styleUrls: ['./create-activite.component.scss']
})
export class CreateActiviteComponent implements OnInit {
  public fileName: string;
  uploadedFiles: any ;
  public profileImage: File;
  private subscriptions: Subscription[] = [];
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  constructor(private messageService: MessageService, public sanitizer: DomSanitizer,
              private confirmationService: ConfirmationService, private httpClient: HttpClient,
              private service: MemberServiceService, private router: Router, private user: LoginService) {
  }
  /*
  getImage() {
    this.httpClient.get('http://localhost:8036/member/image/get/' + this.imageName).subscribe(
    res => {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.activite.imageName = 'data:image/jpeg;base64,' + this.base64Data;
    }
  );
  }*/
  onFileSelected(event){
    this.selectedFile = (event.target.files[0] as File);
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
    /*
    onUpload(event) {
         this.uploadedFiles.push(event.files);
         this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
   }

     onUploads() {
       console.log(this.selectedFile);
       const uploadImageData = new FormData();
       uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
       this.httpClient.post('http://localhost:8036/member/image/upload', uploadImageData, { observe: 'response' })
           .subscribe((response) => {
             if (response.status === 200) {
               this.message = 'Image uploaded successfully';
             } else {
               this.message = 'Image not uploaded successfully';
             }
           }
     );
       this.activite.imageName = this.selectedFile.name;
     }


     public onProfileImageChange(event: any): void {
       const target = event.target as HTMLInputElement;
       this.profileImage = (target.files as FileList)[0];
       this.fileName = (target.files as FileList)[0].name;
       const formData = new FormData();
       formData.append('username', this.user.member.nom);
       formData.append('profileImage', this.profileImage);
       console.log(this.profileImage);
       console.log(this.fileName);
     }
     public onFileChanged(event) {
       this.selectedFile = event.target.files[0];
     }*/
    get listClbs(): Array < Clubs > {
    return this.service.listClbs;
  }

    set listClbs(value: Array<Clubs>) {
    this.service.listClbs = value;
  }
  get itemsClubs(): Array < Clubs > {
    if (this.service.itemsClubs == null) {
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
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public saveActivite() {
    this.submitted = true;
    this.activite.clubs = this.clubsMember.clubs;
    console.log(this.activite.clubs.id);
    if (this.activite.id == null) {
      this.service.SaveActivite().subscribe(data => {
        // tslint:disable-next-line:no-shadowed-variable
        this.service.findClubsActivitie().subscribe(data => this.itemsActivite = data);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cours Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.activite = new Activite();
    }
  }
  ngOnInit(): void {
  }


}
