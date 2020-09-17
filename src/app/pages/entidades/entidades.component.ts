import { Component, OnInit } from '@angular/core';
import { UsuarioEntidad } from 'src/app/clases/usuario-entidad';
import { MiServicioService } from '../../servicios/mi-servicio.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  listadoEntidades = [];
  entidadSeleccionada = new UsuarioEntidad;

  constructor(private miServicio: MiServicioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerEntidades().subscribe((entidades: any) => {
      this.listadoEntidades = entidades;
      console.log(this.listadoEntidades);
    })
  }

  SeleccionarEntidad(entidad) {
    console.log(entidad);
    this.entidadSeleccionada = entidad;
  }

}
