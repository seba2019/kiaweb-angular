import { Injectable } from '@angular/core';
import { Contenido } from '../models/contenido-model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class KiaProxyService {
  private readonly _url:string = "https://0efc02f6-86f1-468b-90ac-92d11f0d8286.mock.pstmn.io";
  constructor() { }

  public GetContentByCollectionId(id:Guid):Contenido {
    return new Contenido();
  }
}
