import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private httpClient: HttpClient) {

   }

   public getAll(): any {
    return this.httpClient.get('http://programa2.net/univalle/obtener_alumnos.php');
   }
}
