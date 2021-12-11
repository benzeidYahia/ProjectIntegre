import {Clubs} from './clubs';

export class Activite {
    public id: number;
    public nomActivite: string;
    public description: string;
    public image: string;
    public imageName: string;
    public budget: number;
    public dateDebut = new Date() ;
    public  dateFin =  new Date();
    public clubs: Clubs;
}
