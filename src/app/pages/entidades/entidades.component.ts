import { Component, OnInit } from '@angular/core';
import { UsuarioEntidad } from 'src/app/clases/usuario-entidad';
import { MiServicioService } from '../../servicios/mi-servicio.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  listadoEntidad: UsuarioEntidad[] = [];
  entidadSeleccionada = new UsuarioEntidad;
  entidadSeleccionadaparaBorrar = new UsuarioEntidad;

  constructor(private miServicio: MiServicioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerEntidades().subscribe((entidades: any) => {
      this.listadoEntidad = entidades;
      console.log(this.listadoEntidad);
    })
  }

  SeleccionarEntidad(entidad) {
    console.log(entidad);
    this.entidadSeleccionada = entidad;
  }

  OpUsuarioABorrar(entidad: UsuarioEntidad) {
    console.log('entidad-component');
    console.log(entidad);
    console.log(this.listadoEntidad);
    /*this.listadoEntidad.forEach( function (value) {
      console.log(value.id);
      console.log(entidad.id);
    });

    const result = this.listadoEntidad.filter(function(elem) {
      return !(elem.id == entidad.id);
    });

    this.listadoEntidad = result;*/

  }

}
