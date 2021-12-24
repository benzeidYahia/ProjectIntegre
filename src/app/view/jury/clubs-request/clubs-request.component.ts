import { Component, OnInit } from '@angular/core';
import {DemandeCreationClb} from '../../../controller/model/demande-creation-clb';
import {ConfirmationService, MessageService} from 'primeng/api';
import {JuryServiceService} from '../../../controller/service/jury-service.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../controller/service/login.service';
import {Clubs} from '../../../controller/model/clubs';
import {JuryDVE} from '../../../controller/model/jury-dve';

@Component({
  selector: 'app-clubs-request',
  templateUrl: './clubs-request.component.html',
  styleUrls: ['./clubs-request.component.scss']
})
export class ClubsRequestComponent implements OnInit {

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: JuryServiceService, private router: Router, private user: LoginService) {
  }

  ngOnInit(): void {
    this.service.findRequest().subscribe(data => this.itemsdemande = data);
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
    this.demande.nomAdmin = this.user.jury.nom;
    this.demande.prenomAdmin = this.user.jury.prenom;
    this.service.validateClub().subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.service.findRequest().subscribe(data => {
        this.listdemande = data;
      });
      // this.updateNewClub();
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Club Validated',
        life: 3000
      });
    });

  }
  public updateNewClub(){
    this.service.findJury(this.user.jury.nom, this.user.jury.prenom).subscribe(data => this.jury = data);
    this.service.findClubs().subscribe(data => this.clubs = data);
    this.clubs.jury = this.jury;
    this.service.updateClubs().subscribe(data => {
      console.log(this.clubs);
    });
    this.service.findRequest().subscribe(data => {
      this.listdemande = data;
    });
  }
  get clubs(): Clubs {
    return this.service.clubs;
  }

  set clubs(value: Clubs) {
    this.service.clubs = value;
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
  public view(clubs: DemandeCreationClb){
    this.demande = {...clubs};
    this.viewDialog = true;
  }
}
