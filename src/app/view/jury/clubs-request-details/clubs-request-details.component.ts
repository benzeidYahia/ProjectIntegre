import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {JuryServiceService} from '../../../controller/service/jury-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {DemandeCreationClb} from '../../../controller/model/demande-creation-clb';
import {JuryDVE} from '../../../controller/model/jury-dve';

@Component({
  selector: 'app-clubs-request-details',
  templateUrl: './clubs-request-details.component.html',
  styleUrls: ['./clubs-request-details.component.scss']
})
export class ClubsRequestDetailsComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: JuryServiceService, private router: Router, private user: LoginService) {
  }

  ngOnInit(): void {
    if (this.jury.id == null){
      this.router.navigate(['**']);
    }
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
  public accepte(clubs: DemandeCreationClb){
    this.demande = clubs;
    this.service.validateClub().subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Club Validated',
        life: 3000
      });
    });
  }
  get jury(): JuryDVE {
    return this.service.jury;
  }

  set jury(value: JuryDVE) {
    this.service.jury = value;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  public hideViewDialog(){
  this.viewDialog = false;
  }
}
