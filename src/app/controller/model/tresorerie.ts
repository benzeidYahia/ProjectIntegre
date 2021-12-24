import {Activite} from './activite';

export class Tresorerie {
    public id: number;
    public inn: boolean;
    public amount: number;
    public amountBudget: number;
    public dateTresorerie = new Date();
    public activite: Activite;
}
