import {Member} from './member';
import {Clubs} from './clubs';

export class ClubsMembers {
    public id: number;
    public dateAdherence = new Date();
    public status: string;
    public etat: boolean;
    public clubs: Clubs;
    public member: Member;
}
