// "id":"a7b7f1fb-11f9-49cb-b6e9-314c65277e28",
// "urlcontenido":"/img/01.png",
// "esvisible":true,
// "esportada":true,
// "idcolleccion":"3177bb5b-27da-43be-b5ac-41de2df1d988",
// "tipoid":1

import { Guid } from "guid-typescript";

export class Contenido{
    public Id?:Guid;
    public urlContenido?:string;
    public esVisible?:boolean;
    public esPortada?:boolean;
    public idColeccion?:Guid;
    public tipoId?:number;
}