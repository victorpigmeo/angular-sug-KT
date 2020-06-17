import { Injectable } from '@angular/core';
import {Cat} from '../model/cat.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private endpoint = environment.serverBaseUrl + '/cats';

  constructor(private httpClient: HttpClient) { }

  public listCats(): Promise<Array<Cat>>{
    const headers: HttpHeaders = new HttpHeaders({'x-apikey': '5ee270ea4e6043315b0af9cb'});

    return this.httpClient.get<Array<Cat>>(this.endpoint, {headers}).toPromise();
  }
}
