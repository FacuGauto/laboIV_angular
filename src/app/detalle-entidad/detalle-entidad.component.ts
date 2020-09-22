import { Component, EventEmitter, Host, Input, OnInit, Output } from '@angular/core';
import { UsuarioEntidad } from '../clases/usuario-entidad';
import { ListadoEntidadComponent } from '../listado-entidad/listado-entidad.component';
import { EntidadesComponent } from '../pages/entidades/entidades.component';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})

export class DetalleEntidadComponent implements OnInit {

  @Input() entidad: UsuarioEntidad;
  //@Output() usuarioBorrado = new EventEmitter<UsuarioEntidad>();
  //@Output() usuarioABorrar = new EventEmitter<UsuarioEntidad>();

  constructor(@Host() private _app: EntidadesComponent) {
    //
    console.log(this._app);
  }

  ngOnInit(): void {
  }

  borrarEntidad(entidad: UsuarioEntidad) {
    
    //this.usuarioABorrar.emit(entidad);
    console.log('detalle');
    console.log(entidad);
    //this.usuarioABorrar = null;
    /*Codigo que traje del padre*/
    const result = this._app.listadoEntidad.filter(function(elem) {
      return !(elem.id == entidad.id);
    });

    this._app.listadoEntidad = result;
  }

}
