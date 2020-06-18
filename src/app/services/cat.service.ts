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
    return this.httpClient.get<Array<Cat>>(this.endpoint).toPromise();
  }

  public addCat(cat: Cat): Promise<Cat>{
    return this.httpClient.post<Cat>(this.endpoint, cat).toPromise();
  }
}
