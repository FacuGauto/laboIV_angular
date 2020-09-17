import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  private url = environment.urlpaises;
  //private url: string = 'https://api.mocki.io/v1/570c5e5c';
  //public usuario;

  constructor(private http: HttpClient) { }

  public obtenerPaises() {
    return this.http.get(this.url);
  }
}
