import {Parcours} from './parcours.model';
import {QuizEtudiant} from './quiz-etudiant.model';
import {EtatInscription} from './etat-inscription.model';
import {Prof} from './prof.model';
import {Centre} from './centre.model';

export class Etudiant {
    public id: number;
    public ref: string;
    public nom: string;
    public prenom: string;
    public age: number;
    public login: string;
    public ville: string;
    public address: string;
    public password: string;
    public parcours = new Parcours();
    public quizEtudiant = new Array<QuizEtudiant>();
    public etatInscription = new EtatInscription();
    public prof = new Prof();

}
