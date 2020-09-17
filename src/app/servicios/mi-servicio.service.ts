import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  private url = environment.urlpaises;
  private url_entidades = environment.url_emtidades;
  
  constructor(private http: HttpClient) { }

  public obtenerPaises() {
    return this.http.get(this.url);
  }

  public obtenerEntidades() {
    return this.http.get(this.url_entidades);
  }
}
