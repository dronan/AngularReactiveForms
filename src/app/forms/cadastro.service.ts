import { URL_API } from '../app.api'
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CadastroService{

    constructor(private http: Http){}

    finalizaCadastro(cadastro: Cadastro): Observable<any> {
      const params = 'json='+JSON.stringify(cadastro)
      const headers = new Headers()
      headers.append('Content-Type', 'application/x-www-form-unlerncoded')
      return this.http.post(`${URL_API}`, params, {headers: headers}).map(resp => resp.json())
    }


}
