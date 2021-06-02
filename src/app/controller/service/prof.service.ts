/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';

import { Prof } from '../Model/prof.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {CategorieProf} from '../Model/categorie-prof.model';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  private url = environment.baseUrl + 'prof/';
  private _selectedProf: Prof;
  private _itemsCategorieProf: Array<CategorieProf>;

  constructor(private http: HttpClient) { }
  public save(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/prof/', this.selectedProf);
  }
  get selectedProf(): Prof {
    if (this._selectedProf == null){
      this._selectedProf = new Prof();
    }
    return this._selectedProf;
  }

  set selectedProf(value: Prof) {
    this._selectedProf = value;
  }
  public findAllCategorieProf(): Observable<Array<CategorieProf>> {
    return this.http.get< Array<CategorieProf> >('http://localhost:8036/learn/categorieprof/');
  }

  get itemsCategorieProf(): Array<CategorieProf> {
    if ( this._itemsCategorieProf == null){
      this._itemsCategorieProf = new Array<CategorieProf>();
    }
    return this._itemsCategorieProf;
  }

  set itemsCategorieProf(value: Array<CategorieProf>) {
    this._itemsCategorieProf = value;
  }
}
