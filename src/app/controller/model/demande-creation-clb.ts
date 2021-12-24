import {Member} from './member';

export class DemandeCreationClb {
    public id: number;
    public  libelle: string;
    public referentPedagogique: string ;
    public  status: string;
    public  categorie: string;
    public  description: string;
    public dateCreation = new Date() ;
    public image: string;
    public nomAdmin: string;
    public prenomAdmin: string;
    public member: Member;
}
