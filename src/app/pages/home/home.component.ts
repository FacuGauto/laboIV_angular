import { Component, OnInit } from '@angular/core';
import { MiServicioService } from './../../servicios/mi-servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listadoPaises = [];
  paisSelecionado;

  constructor(private miservicio: MiServicioService) { }

  ngOnInit(): void {
    this.miservicio.obtenerPaises().subscribe((paises: any) => {
      this.listadoPaises = paises;
    })
  }

  PaisSeleccionado(pais) {
    console.log(pais);
    this.paisSelecionado = pais;
  }

}
